// contactReducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  contacts: [],
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateContact: (state, action) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.contacts[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;

export const contactSelector = (state) => state.contactReducer.contacts;
