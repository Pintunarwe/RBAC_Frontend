// redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    addUser: (state, action) => {
      const newUser = {
        ...action.payload,
        id: Date.now(), // Use a unique id based on timestamp (for example purposes)
      };
      state.push(newUser);
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload);
    }
  }
});

export const { setUsers, addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
