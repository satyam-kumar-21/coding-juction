import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    loading: false,
    error: null,
    isAuthenticated: false 
};

export const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser :(state, action) => {
            state.user = action.payload
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
})

export const {registerUser, loginUser, logoutUser} = userReducer.actions
export default userReducer.reducer;