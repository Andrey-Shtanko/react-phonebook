import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from './../auth/authOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    filteredContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const contactIdx = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(contactIdx, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.filter = '';
    },
  },
});

export const { filteredContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
