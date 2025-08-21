import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SliderApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Banner"],
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: () => "banners",
      providesTags: ["Banner"],
    }),
    getBannerById: builder.query({
      query: (id) => `banners/${id}`,
      providesTags: ["Banner"],
    }),
    addBanner: builder.mutation({
      query: (formData) => ({
        url: "banners",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Banner"],
    }),
    updateBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `banners/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Banner"],
    }),
    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `banners/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Banner"],
    }),
  }),
});

export const {
  useGetAllBannersQuery,
  useGetBannerByIdQuery,
  useAddBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
} = SliderApi;
