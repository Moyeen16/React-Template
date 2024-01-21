import { configureStore } from "@reduxjs/toolkit";
import { appReduxSlice } from "./slice/appSlice";

export const store = configureStore({
	devTools: {
		name: "App Name Store",
	},
	reducer: {
		app_reducer: appReduxSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
