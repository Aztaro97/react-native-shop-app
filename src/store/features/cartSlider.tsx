import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface cartState {
  quantity: number;
}

// Define the initial state using that type
const initialState: cartState = {
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      state.quantity -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.quantity += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
