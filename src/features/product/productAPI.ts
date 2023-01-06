import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../modules/IProduct'

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7070/api' }),
  tagTypes: ['IProduct'],
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct[], string>({
      query: (categoryId) => ({
        url: '/items',
        params: {
          categoryId
        },
        providesTags: ['IProduct'],
      })
    }),
    getOffsetProducts: build.query({
      query: (offset) => ({
        url: '/items',
        params: {
          offset
        }
      })
    }),
    getTopSales: build.query({
      query: () => ({
        url: '/top-sales',
      })
    }),
    getProductItem: build.query<IProduct, number | any>({
      query: (id) => ({
        url: `/items/${id}`,
        params: {
          id
        }
      })
    }),
  })
})

export const {useGetAllProductsQuery, useGetTopSalesQuery, useGetProductItemQuery} = productAPI