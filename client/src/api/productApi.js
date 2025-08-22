import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers) => {
      headers.delete("Content-Type");  
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (formData) => ({
        url: "/product",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
export const { useAddProductMutation } = ProductApi;