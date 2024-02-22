import axios from "axios";

import {
    createLecture,
    updateLecture,
    getLecture,
    deleteLecture,
    getAllLectures,
} from "../Reducers/lectureReducer";

const handleError = (error, actionName) => {
    console.error(`Error ${actionName}:`, error);
};

export const createLectureAction = (courseId, lectureData) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`http://localhost:5050/api/lectures/create/${courseId}`, lectureData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }); 
        dispatch(createLecture(response.data)); 
        return response.data;
    } catch (error) {
        handleError(error, "Creating Lecture");
    }
};


export const updateLectureAction = (lectureId, lectureData) => async (dispatch, getState) => {
    try {
        const response = await axios.put(`http://localhost:5050/api/lectures/update/${lectureId}`, lectureData); 
        dispatch(updateLecture(response.data)); 
        return response.data;
    } catch (error) {
        handleError(error, "Updating Lecture");
    }
};

export const deleteLectureAction = (lectureId) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5050/api/lectures/delete/${lectureId}`);
        dispatch(deleteLecture(lectureId));
        return { success: true };
    } catch (error) {
        console.error("Error deleting lecture:", error);
        throw error;
    }
};

export const getAllLecturesAction = () => async (dispatch, getState) => {
    try {
        const response = await axios.get("http://localhost:5050/api/lectures");
        dispatch(getAllLectures(response.data)); 
    } catch (error) {
        handleError(error, "Fetching All Lectures");
    }
};

export const getOneLectureAction = (lectureId) => async (dispatch, getState) => {
    try {
        const response = await axios.get(`http://localhost:5050/api/lectures/${lectureId}`); 
        dispatch(getLecture(response.data)); 
        return response.data;
    } catch (error) {
        handleError(error, "Fetching Single Lecture");
    }
};
