// utils/validation.js
export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  export const validateName = (name) => {
    return name.length > 0;
  };
  
  export const validatePasswordsMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  