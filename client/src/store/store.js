import { configureStore } from "@reduxjs/toolkit";
import { SliderApi } from "../api/bannerApi";
import { CategoryApi } from "../api/categoryApi";
import { ProductApi } from "../api/productApi";
import { authApi } from "../api/AuthApi";
import { orderApi } from "../api/orderApi";

export const store = configureStore({
  reducer: {
    [SliderApi.reducerPath]: SliderApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SliderApi.middleware,CategoryApi.middleware,ProductApi.middleware,authApi.middleware,orderApi.middleware),
});