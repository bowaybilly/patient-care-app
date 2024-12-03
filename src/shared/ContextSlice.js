import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyName: "",
  theme: "light", // Options: 'light' or 'dark'
  language: "en", // Default language
  notificationsEnabled: true, // Example setting
  isAuthenticated: false,
  user: {
    userName: "",
    email: "",
    telephone: "",
    isAdmin: "",
  },
};
export const contextSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.companyName = action.payload.companyName;
      state.theme = action.payload.theme;
      state.language = action.payload.language;
      state.notificationsEnabled = action.payload.notificationsEnabled;
    },
    setAuthUser: (state, action) => {
      state.user.userName = action.payload.user.userName;
      state.user.email = action.payload.user.email;
      state.user.telephone = action.payload.user.telephone;
      state.user.isAdmin = action.payload.user.isAdmin;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = {
        userName: "",
        email: "",
        telephone: "",
        isAdmin: "",
      };
    },
  },
});

export const { setCompany, setAuthUser, login, logout } = contextSlice.actions;
export default contextSlice.reducer;
