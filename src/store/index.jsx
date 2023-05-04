import { configureStore, createSlice } from "@reduxjs/toolkit";
// import themeSlice from "../features/themeSlice";

const initialPhoneState = {
	phoneNum: [],
};

const phoneNumberSlice = createSlice({
	name: "PhoneNumber",
	initialState: initialPhoneState,
	reducers: {
		passPhoneNum(state, action) {
			state.phoneNum = action.payload;
			console.log("📞🍰", state.phoneNum);
		},
	},
});

const store = configureStore({
	reducer: {
		phoneNumber: phoneNumberSlice.reducer,
	},
});

export const phoneNumberAction = phoneNumberSlice.actions;
export { store };
