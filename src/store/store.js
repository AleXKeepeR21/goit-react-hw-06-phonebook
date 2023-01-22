import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from '../features/Contacts/Contact.slice';

export const store = configureStore({ reducer: { contacts: contactsReducer } });
