// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice"; // Example slice, create your slices as needed

const store = configureStore({
    reducer: {
        user: userReducer, // Add more reducers as needed
    },
});

export default store;
