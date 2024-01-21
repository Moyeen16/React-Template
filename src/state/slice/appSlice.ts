import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "../../model/IAppState";
import { RootState } from "../store";

const initialState: IAppState = {
	sampleStateVal: 0,
};

export const appReduxSlice = createSlice({
	name: "appSlice",
	initialState,
	reducers: {
		setStateVals: (state, action: PayloadAction<number>) => {
			state.sampleStateVal = action.payload;
		},
	},
});

export const { setStateVals } = appReduxSlice.actions;

export const selectStore = (state: RootState) => state.app_reducer;
