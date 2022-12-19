import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cartReducers/cartSlice";
import authReducer from "./features/authReducers/authSliders";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		auth: authReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch