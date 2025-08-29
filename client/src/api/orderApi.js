import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    // ✅ Place new order
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: "/order",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Order"],
    }),

    // ✅ Get all orders (Admin)
    getOrders: builder.query({
      query: () => "/orders",
      providesTags: ["Order"],
    }),

    // ✅ Get user orders
    getUserOrders: builder.query({
      query: (userId) => `/orders/${userId}`,
      providesTags: ["Order"],
    }),

    // ✅ Update order status (Admin)
    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/orders/${id}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetOrdersQuery,
  useGetUserOrdersQuery,
  useUpdateOrderStatusMutation,
} = orderApi;
