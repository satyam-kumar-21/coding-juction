import axios from "axios";
import { registerUser, loginUser, logoutUser, addCourseToUser, updateUserProfile } from "../Reducers/userReducer";

// Common error handling function
const handleError = (error, actionName) => {
    console.error(`Error ${actionName}:`, error);
};

export const registerUserAction = (userData) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:5050/api/user/register", userData); 
        dispatch(registerUser(response.data)); 
    } catch (error) {
        handleError(error, "registering user");
    }
};

export const loginUserAction = (userData) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:5050/api/user/login", userData); 
        if (response.data) {
            dispatch(loginUser(response.data)); 
        } else {
            console.error("Login failed: Invalid response from server");
        }
    } catch (error) {
        handleError(error, "logging in");
    }
};

export const logoutUserAction = () => async (dispatch) => {
    try {
        dispatch(logoutUser());
    } catch (error) {
        handleError(error, "logging out");
    }
};

export const addCourseToUserAction = (userId, courseId) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:5050/api/user/add-course/${userId}`, { courseId });
        dispatch(addCourseToUser(response.data)); 
        return response.data;
    } catch (error) {
        handleError(error, "adding course to user");
    }
};



export const updateUserProfileAction = (userId, userData) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:5050/api/user/${userId}/profile`, userData);
        dispatch(updateUserProfile(response.data)); 
    } catch (error) {
        handleError(error, "updating user profile");
    }
};


