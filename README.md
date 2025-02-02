# **Personal Note Manager**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

The **Personal Note Manager** is a full-stack web application that allows users to create, manage, and organize their notes efficiently. It is built using **React.js** for the frontend, **Node.js** and **Express.js** for the backend, and **MongoDB** as the database.

---

## **Features**
- **Create, Read, Update, and Delete (CRUD) Notes**
- User-friendly interface with React.js
- RESTful API backend with Node.js and Express.js
- Data persistence with MongoDB
- Responsive design for seamless use on all devices

---

## **Technologies Used**
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other Tools:** Axios (for API calls), Mongoose (for MongoDB object modeling), Bootstrap (for styling)

---

## **Prerequisites**
Before running the project, ensure you have the following installed:
1. **Node.js** (v16 or higher)
2. **npm** (Node Package Manager)
3. **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)

---

## **How to Run the Project**

### **1. Clone the Repository**
Clone the project repository to your local machine:
```bash
git clone https://github.com/Moulali2004/Personal_Note_Manager.git
cd Personal_Note_Manager
```

---

### **2. Set Up the Backend**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add your MongoDB connection string:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/note-manager?retryWrites=true&w=majority
   PORT=5000
   ```
   Replace `<username>` and `<password>` with your MongoDB credentials.

4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

---

### **3. Set Up the Frontend**
1. Open a new terminal window and navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

---

### **4. Access the Application**
Open your browser and go to `http://localhost:3000` to use the **Personal Note Manager**.

---

## **Project Structure**
```
Personal_Note_Manager/
├── backend/               # Backend (Node.js + Express.js)
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   ├── config/            # Configuration files
│   ├── .env               # Environment variables
│   └── server.js          # Entry point for the backend
│
├── frontend/              # Frontend (React.js)
│   ├── public/            # Static assets
│   ├── src/               # React components and pages
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Application pages
│   │   ├── App.js         # Main application component
│   │   └── index.js       # Entry point for the frontend
│   └── package.json       # Frontend dependencies
│
└── README.md              # Project documentation
```

---

## **Environment Variables**
- **Backend:**
  - `MONGO_URI`: MongoDB connection string.
  - `PORT`: Port for the backend server (default: `5000`).

---

## **Contributing**
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**
For any questions or feedback, feel free to reach out:
- **Name:** Moulali
- **Email:** your-email@example.com
- **GitHub:** [Moulali2004](https://github.com/Moulali2004)

---

Enjoy using the **Personal Note Manager**! 🚀

---

This `README.md` provides a comprehensive guide for anyone looking to set up and run your project. Let me know if you need further assistance! 😊
