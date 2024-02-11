import { configureStore } from "@reduxjs/toolkit";
import userReducer, { loginUser } from "./Reducers/userReducer";
import courseReducer from "./Reducers/courseReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer
  },
  preloadedState
});

store.subscribe(() => {
  const currentState = store.getState();
  // Check if the user is authenticated before saving the state
  if (currentState.user.isAuthenticated) {
    saveState(currentState);
  }
});

export default store;
