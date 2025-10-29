import { createSlice } from "@reduxjs/toolkit";
const savedUser = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: savedUser || null,
  isAuthenticated: !!savedUser,
  error: null,
  loading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      isAuthenticated = false;
      state.error = null;
      state.loading = false;
      localStorage.removeItem("user");
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { loginStart,loginSuccess, logout, loginFailure } = authSlice.actions;
export default authSlice.reducer;
