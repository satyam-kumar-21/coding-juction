import axios from "axios";

import {createCourse, updateCourse,getCourse, deleteCourse, getAllCourse} from "../Reducers/courseReducer"

const handleError = (error, actionName) => {
    console.error(`Error ${actionName}:`, error);
};

export const createCourseAction = (userData) => async (dispatch, getState) => {
    try {
        const response = await axios.post("http://localhost:5050/api/course/create", userData); 
        dispatch(createCourse(response.data)); 
        //console.log(response.data);
    } catch (error) {
        handleError(error, "Creating course");
    }
}

export const updateCourseAction = (courseId, userData) => async (dispatch, getState) => {
    try {
        const response = await axios.put(`http://localhost:5050/api/course/update/${courseId}`, userData); 
        dispatch(updateCourse(response.data)); 
        //console.log(response.data);
    } catch (error) {
        handleError(error, "Updating Course");
    }
}


export const deleteCourseAction = (courseId) => async (dispatch, getState) => {
    try {
        const response = await axios.delete(`http://localhost:5050/api/course/delete/${courseId}`);
        dispatch(deleteCourse(response.data)); 
        // console.log(response.data);
    } catch (error) {
        handleError(error, "Deleting Course");
    }
};

export const getAllCourseAction = () => async (dispatch, getState) => {
    try {
        const response = await axios.get("http://localhost:5050/api/course");
        dispatch(getAllCourse(response.data)); 
        // console.log(response.data);
    } catch (error) {
        handleError(error, "Fetching All Courses");
    }
};

export const getOneCourseAction = (courseId) => async (dispatch, getState) => {
    try {
        const response = await axios.get(`http://localhost:5050/api/course/${courseId}`); // Assuming this endpoint returns a single course by ID
        dispatch(getCourse(response.data)); 
        // console.log(response.data);
    } catch (error) {
        handleError(error, "Fetching Single Course");
    }
};
