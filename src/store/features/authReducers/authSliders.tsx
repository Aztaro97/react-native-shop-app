import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return {
        ...state,
        isAuth: action.payload,
      };
    },
    logout: (state) => {
      return {
        ...state,
        isAuth: false,
      };
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
