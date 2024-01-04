// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   contacts: [],
// };

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchContacts",
//   async () => {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     return response.data;
//   }
// );

// const contactSlice = createSlice({
//   name: "contacts",
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//     updateContact: (state, action) => {
//       const index = state.contacts.findIndex(
//         (contact) => contact.id === action.payload.id
//       );
//       state.contacts[index] = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchContacts.fulfilled, (state, action) => {
//       state.contacts = action.payload;
//     });
//   },
// });

// export const contactReducer = contactSlice.reducer;
// export const { addContact, deleteContact, updateContact } =
//   contactSlice.actions;
// export const contactSelector = (state) => state.contactReducer.contacts;

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

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      contact
    );
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    return id;
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${contact.id}`,
      contact
    );
    return response.data;
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.contacts[index] = action.payload;
      });
  },
});

export default contactSlice.reducer;