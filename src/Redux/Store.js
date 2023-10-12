import { configureStore } from "@reduxjs/toolkit";
import { APIReducer } from "./APISlice";

let store = configureStore({
  reducer: {
    APIData: APIReducer,
  },
});
export default store;
