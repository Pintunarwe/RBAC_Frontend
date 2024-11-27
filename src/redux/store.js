import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import roleReducer from './slices/roleSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    roles: roleReducer,
  },
});

export default store;
