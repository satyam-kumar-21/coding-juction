import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    loading: false,
    error: null,
    isAuthenticated: false 
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.user.user = action.payload;
            state.isAuthenticated = true;
        },
        loginUser: (state, action) => {
            state.isAuthenticated = true;
            state.user.user = action.payload;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.user.user = {};
        },
        addCourseToUser: (state, action) => {
            state.user.user = {
                ...state.user.user.user,
                courses: [...state.user.user.user.courses, action.payload],
            };
        },
        
        updateUserProfile: (state, action) => {
            state.user.user = {
                ...state.user.user.user,
                ...action.payload,
            };
        }
    }
});

export const { registerUser, loginUser, logoutUser, addCourseToUser, updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
