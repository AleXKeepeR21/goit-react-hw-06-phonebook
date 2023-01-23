import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    delContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setQuery: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, delContact, setQuery } = contactSlice.actions;
export default contactSlice.reducer;
