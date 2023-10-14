import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filter/filtersSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});
