import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../lib/types/user-data.type";

const dataFromLocalStorage = localStorage.getItem('user')
const initialState: { value: UserData | null } = { value: dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : null }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.value = null
      localStorage.removeItem('user');
    }
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;