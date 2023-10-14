const { createSlice } = require('@reduxjs/toolkit');
const { initialContactsState } = require('./initialContactsState');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    setNewUser(state, action) {
      return [...state, action.payload];
    },
    deleteUser(state, action) {
      return state.filter(user => user.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setNewUser, deleteUser } = contactsSlice.actions;
