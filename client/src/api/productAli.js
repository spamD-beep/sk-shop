import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi=createApi({
    reducerPath:"ProductApi",
    baseQuery:fetchBaseQuery({ baseUrl:"http://localhost:5000/api" }),
    endpoints:  (builder)=>({
        addProduct:builder.mutation({
            query:(formData)=>({
                url:"/products",
                method:"POST",
                body:formData
            })
        })
    })
}) 
const {
    useAddProductMutation
}=ProductApi;