// Store.js
import { configureStore } from "@reduxjs/toolkit";
import contextReducer from "./ContextSlice"; // Import the default export (the reducer)

export const store = configureStore({
  reducer: {
    context: contextReducer, // Use the imported reducer here
  },
});
