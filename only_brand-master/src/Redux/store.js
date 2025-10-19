import { configureStore } from "@reduxjs/toolkit";
import OnlyBrandreducer from "./OnlyBrandSlice";

export const store = configureStore({
  reducer: { OnlyBrand: OnlyBrandreducer },
});
