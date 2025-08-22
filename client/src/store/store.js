import { configureStore } from "@reduxjs/toolkit";
import { SliderApi } from "../api/bannerApi";
import { CategoryApi } from "../api/categoryApi";
import { ProductApi } from "../api/productApi";

export const store = configureStore({
  reducer: {
    [SliderApi.reducerPath]: SliderApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SliderApi.middleware,CategoryApi.middleware,ProductApi.middleware),
});