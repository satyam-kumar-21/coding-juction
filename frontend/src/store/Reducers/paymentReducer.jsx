// reducers/paymentReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    payment: {},
    loading: false,
    error: null,
    isPaid: false 
};

export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        initiatePayment: (state, action) => {
            state.payment = action.payload;
            state.isPaid = false;
            state.loading = true;
            state.error = null;
        },
        completePayment: (state, action) => {
            state.isPaid = true;
            state.loading = false;
            state.payment = action.payload;
        },
        paymentError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { initiatePayment, completePayment, paymentError } = paymentSlice.actions;
export default paymentSlice.reducer;
