import {createSlice} from "@reduxjs/toolkit";

export interface AuthState {
  isAuth: boolean;
  user: any;
}

const initialState: AuthState = {
  isAuth: false,
  user: {},
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    },
    logout: state => {
      return {
        ...state,
        isAuth: false,
        user: {},
      };
    },
  },
});

export const {setAuth, logout} = authSlice.actions;

export default authSlice.reducer;
