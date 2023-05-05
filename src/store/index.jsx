import { configureStore, createSlice } from "@reduxjs/toolkit";
// import themeSlice from "../features/themeSlice";

const initialPhoneState = {
	phoneNum: [],
};
const initialAccessCode = {
	accessCode: [],
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
const accessCodeSlice = createSlice({
	name: "AccessCode for render page content",
	initialState: initialAccessCode,
	reducers: {
		passAccessNum(state, action) {
			state.accessCode = action.payload;
			console.log("🕸️🍰", state.accessCode);
		},
	},
});

const store = configureStore({
	reducer: {
		phoneNumber: phoneNumberSlice.reducer,
		AccessCode: accessCodeSlice.reducer,
	},
});

export const phoneNumberAction = phoneNumberSlice.actions;
export const accessCodeAction = accessCodeSlice.actions;
export { store };
