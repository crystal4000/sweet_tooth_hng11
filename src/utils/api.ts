import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiUrl: string = process.env.REACT_APP_BASE_API_URL ?? "";
const apiKey: string = process.env.REACT_APP_API_KEY ?? "";
const appId: string = process.env.REACT_APP_APP_ID ?? "";
const organizationId: string = process.env.REACT_APP_ORGANIZATION_ID ?? "";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl, // This will be proxied to 'https://api.timbu.cloud'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, size = 10, reverseSort = false }) => ({
        url: "/products",
        params: {
          organization_id: organizationId,
          reverse_sort: reverseSort,
          page,
          size,
          Appid: appId,
          Apikey: apiKey,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
