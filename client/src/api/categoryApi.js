// app/api/categoryApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CategoryApi = createApi({
  reducerPath: "CategoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (formData) => ({
        url: "/category",
        method: "POST",
        body: formData,
      }),
    }),
     addSubCategory: builder.mutation({
      query: (formData) => ({
        url: "/subcategory",
        method: "POST",
        body: formData,
      }),
    }),
    getCategories: builder.query({
      query: () => "/categories", // GET request
    }),
    getAllCategories:builder.query({
        query:()=> "/all-categories", // GET request to fetch all categories
    })
  }),
});

export const { useAddCategoryMutation , useAddSubCategoryMutation,useGetCategoriesQuery,useGetAllCategoriesQuery} = CategoryApi;
