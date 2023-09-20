import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  moreOptionMenu: false,
};

export const statusShowMenuSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    hideMenuStatus: (state) => {
      state.showMenu = false;
    },
    showMenuStatus: (state) => {
      state.showMenu = true;
    },
  },
});

export const { hideMenuStatus, showMenuStatus } = statusShowMenuSlice.actions;

export default statusShowMenuSlice.reducer;
