import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_BASE_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const appId = process.env.REACT_APP_APP_ID;
const organizationId = process.env.REACT_APP_ORGANIZATION_ID;
// const proxyUrl = "http://pubproxy.com/api/proxy?format=json";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    // prepareHeaders: (headers) => {
    //   headers.set("x-proxy-url", proxyUrl); // Set custom header for proxy URL
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: ({ page, size }) => ({
        url: `/products`,
        params: {
          organization_id: organizationId,
          reverse_sort: "false",
          page,
          size,
          Appid: appId,
          Apikey: apiKey,
        },
      }),
    }),
  }),
});

export const { useFetchProductsQuery } = apiSlice;
