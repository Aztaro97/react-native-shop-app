import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CounterState {
  total: number;
  cardItems: any[];
}

const initialState: CounterState = {
  total: 0,
  cardItems: [],
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const item = action.payload;
      const existItem = state.cardItems.find(x => x === item);

      if (existItem) {
        return {
          ...state,
          cardItems: state.cardItems.map(x => (x === existItem ? item : x)),
        };
      } else {
        return {
          ...state,
          cardItems: [...state.cardItems, item],
        };
      }
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      const item = action.payload;
      const existItem = state.cardItems.find(x => x === item);

      if (existItem) {
        return {
          ...state,
          cardItems: state.cardItems.filter(x => x !== existItem),
        };
      } else {
        return {
          ...state,
          cardItems: [...state.cardItems, item],
        };
      }
    },
    clearCart: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        cardItems: [],
      };
    },
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
