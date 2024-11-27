// redux/slices/roleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const roleSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    setRoles: (state, action) => {
      return action.payload;
    },
    addRole: (state, action) => {
      const newRole = action.payload;
      state.push(newRole);
    },
    deleteRole: (state, action) => {
      return state.filter(role => role.id !== action.payload);
    }
  }
});

export const { setRoles, addRole, deleteRole } = roleSlice.actions;

export default roleSlice.reducer;
