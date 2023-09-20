import { configureStore } from "@reduxjs/toolkit";
import statusShowMenuSlice from "redux/featuresSlice/statusShowMenu";

export const store = configureStore({
  reducer: { menuStatus :statusShowMenuSlice },
});
