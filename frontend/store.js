import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/redux/authSlice"; 

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});
