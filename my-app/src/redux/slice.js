import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userName: "",
  password: "",
  contact: {},
  contacts: [],
  errorMessage: "",
  isFormOpen: true,
};

const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setUserName: (action, state) => {
      state.userName = action.payload;
    },
    setPassword: (action, state) => {
      state.password = action.payload;
    },
    setContact: (state, action) => {
      state.contact = action.payload;
    },
    setContacts: (state) => {
      state.contacts.push(state.contact);
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    openForm: (state, action) => {
      state.isFormOpen = action.payload;
    },
  },
});

export const {
  setContact,
  setContacts,
  setUserName,
  setPassword,
  setErrorMessage,
  openForm,
} = slice.actions;
export default slice.reducer;
