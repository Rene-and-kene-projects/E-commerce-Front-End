import { createSlice } from "@reduxjs/toolkit";
import { AsyncStorage } from "react-native";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
