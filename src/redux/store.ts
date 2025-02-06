import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice.ts";
import authReducer from "./authSlice.ts";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
  },
});

export default store;
