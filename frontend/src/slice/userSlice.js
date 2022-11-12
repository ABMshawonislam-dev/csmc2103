import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: localStorage.getItem("userinfo")
      ? JSON.parse(localStorage.getItem("userinfo"))
      : null,
  },
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
