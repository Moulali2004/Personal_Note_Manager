export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const getInitials = (name) => {
    if (!name) return ""; // Return an empty string if no name is provided
  
    const words = name.trim().split(" ");
    let initials = "";
  
    for (let i = 0; i < Math.min(words.length, 2); i++) {
      if (words[i]) {
        initials += words[i][0];
      }
    }
  
    return initials.toUpperCase(); // Convert initials to uppercase
  };
  