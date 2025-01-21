import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: "/order",
        method: "POST",
        body: order,
      }),
    }),
    getOrders: builder.query({
      query: () => "/order",
    }),
    verifyOrder: builder.query({
      query: (id) => ({
        url: "/order/verify",
        params: { sp_trxn_id: id }, // Pass an object for query parameters
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useVerifyOrderQuery,
} = orderApi;
