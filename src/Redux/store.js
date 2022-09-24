import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';
import authReducer from '../Redux/Auth/authSlice'



export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactSlice,
  }
});

