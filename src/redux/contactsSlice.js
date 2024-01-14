import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialContactsState = { contacts: [] };

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['contacts'],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer({ contacts }, action) {
        contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer({ contacts }, action) {
        const index = contacts.findIndex(
          contact => contact.id === action.payload
        );
        contacts.splice(index, 1);
        localStorage.clear();
      },
    },
  },
});

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistedReducer;
