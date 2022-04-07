import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../features/channelSlice";
const store = configureStore({
  reducer: {
    channel: channelReducer,
  },
});

export default store;
