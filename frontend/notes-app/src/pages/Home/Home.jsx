import React, { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import NoteCard from "../../components/cards/NoteCard";
import moment from "moment";
import {MdAdd} from "react-icons/md";
import AddEditNotes from './AddEditNotes';
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../utils/axiosInstance";

Modal.setAppElement('#root');

const Home = () => {

  const [openAddEditModel, setopenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [allNotes, setAllNotes] = useState([]);
  const [userInfo, setUserInfo ] = useState(null);
  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  useEffect(() => {
    getAllNotes();
    getUserInfo();
    return  () => {};
  }, []);

  //Get all notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-all-notes");

      if(response.data && response.data.notes){
        setAllNotes(response.data.notes);
      }
    } catch(error) {
      console.log("An unexpected error occurred:", error);
    }
  };

  const handleEditNote = (noteDetails) => {
    setopenAddEditModel( {
      isShown: true,
      data: noteDetails, 
      type: "edit",
    })
  }

  //Delete Note
  const deleteNote = async (data) => {
      const noteId = data?._id;
      try {
        const response = await axiosInstance.delete("/delete-note/" + noteId);  
        if(response.data && !response.data.error) {
          getAllNotes();
        }
      }catch(error) {
        if(error.response && error.response.data && error.response.data.message) {
          console.log("An unexpected error occured please try again")
        }
      }
  }

  //Search a note
  const onSearchNote = async (query) => {
    try {
      const response = await axiosInstance.get("/search-note", {
        params: {query},
      });

      if(response.data && response.data.notes) {
        setIsSearch(true);
        setAllNotes(response.data.notes);
      }
    } catch(error) {
      console.log(error);
    }
  }

  const handleClearSearch = () => {
    setIsSearch(false);
    getAllNotes();
  }

  //Update pin
  const updatePin = async (noteData) => {
    const noteId = noteData?._id;

    try {
      const response = await axiosInstance.put("/edit-note-pinned/" + noteId, {
        isPinned: !noteData.isPinned,
      });

      if(response.data && !response.data.error) {
        getAllNotes();
      }
    } catch(error) {
      console.log(error);
    }
  }
  

  return (
    <>  
      <Navbar userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch} />

      <div className="container mx-auto">
        <div className='grid grid-cols-3 gap-4 mt-8'>
          {allNotes.length > 0 ? allNotes.map((item, index) => (
            <NoteCard 
              key={item._id}
              title={item.title} 
              date={moment(item.createdOn).format("Do MMM YYYY")} 
              content={item.content} 
              tags={item.tags}
              isPinned={item.isPinned}
              onEdit={() => handleEditNote(item)}
              onDelete={() => deleteNote(item)}
              onPinNote={() => updatePin(item)}
            />
          )): <p> Please click on add button to add notes.</p>}
          
        </div>
      </div>

      <button 
        className='w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-400 hover:bg-blue-600 cursor-pointer absolute right-10 bottom-10' 
        onClick={() => {
          setopenAddEditModel({isShown: true, type: "add", data: null});
        }}>
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModel.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            position: "relative",
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
            width: "40%",
            maxHeight: "75%",
            margin: "0 auto",
            padding: "20px",
            overflow: "auto",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md max-auto mt-15 p-5 overflow-scroll"
       >

       <AddEditNotes 
          type={openAddEditModel.type}
          noteData={openAddEditModel.data}
          onClose={() => {
            setopenAddEditModel({ isShown: false, type: "add", data: null });
          }}
          getAllNotes={getAllNotes}
       />
      </Modal>
    </>
  )
}

export default Home
