
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import type { AuthType } from "../@types";

interface InitialStateType {
  user?: AuthType;
  isAuth: boolean;
}

const userCookie = Cookies.get("user");
const initialState: InitialStateType = {
  user: userCookie ? JSON.parse(userCookie) : null,
  isAuth: userCookie ? true : false,
};

export const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
    logoutUser(state) {
      state.user = undefined;
      state.isAuth = false;
    },
  },
});

export const { getUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
