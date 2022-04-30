import axios from 'axios';

const API_URL = "api/auth/"

// Register user
const register = async (userData) => {
        const res = await axios.post(API_URL + "register", userData);
        
        if(res.data) {
            localStorage.setItem("user", JSON.stringify(res.data));
        }

        return res.data;
}

// Logout user
const logout = async () => {
    localStorage.removeItem("user");
}

// Login user
const login = async (userData) => {
    const res = await axios.post(API_URL + "login", userData);

    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
}

const authService = {
    register,
    logout,
    login
}

export default authService;