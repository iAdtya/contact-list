// import { contactReducer } from "../Reducers/ContactReducers";
import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../Reducers/contactReducers";

export const store = configureStore({
  reducer: { contactReducer },
});
