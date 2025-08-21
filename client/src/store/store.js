import { configureStore } from "@reduxjs/toolkit";
import { SliderApi } from "../api/bannerApi";
import { CategoryApi } from "../api/categoryApi";

export const store = configureStore({
  reducer: {
    [SliderApi.reducerPath]: SliderApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SliderApi.middleware,CategoryApi.middleware),
});