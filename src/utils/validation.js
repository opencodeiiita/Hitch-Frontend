export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
  
export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
};

export const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return name.trim().length > 0 && nameRegex.test(name);
};

export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return username.trim().length > 0 && usernameRegex.test(username);
};

export const validateConfirmPassword = (password,confirmPassword) => {
    return password === confirmPassword;
};