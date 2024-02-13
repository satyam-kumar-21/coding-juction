import { createSlice } from "@reduxjs/toolkit";

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
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        loginUser: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.user = {};
        }
    }
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
