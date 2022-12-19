import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  total: number;
}

const initialState: CounterState = {
  total: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
