import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: { username: "nemanja042" },
  theme: "dracula",
};

const userSlice = {
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      console.log("logout");
    },
    toggleTheme: (state, action) => {
      console.log("toggle theme");
    },
  },
};

export const { loginUser, logoutUser, toggleTheme } = userSlice.action;
export default userSlice;
