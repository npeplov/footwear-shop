import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../models/IProduct'

type ProductResponse = IProduct[]

interface ProductOptions {
  categoryId?: string;
  offset?: string;
}

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7070/api' }),
  tagTypes: ['IProduct'],
  endpoints: (build) => ({
    getProducts: build.query<ProductResponse, ProductOptions>({
      query: ({ categoryId, offset }) => ({
        url: '/items',
        params: {
          categoryId,
          offset,
        },
        providesTags: ['IProduct'],
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
    getCategories: build.query({
      query: () => ({
        url: `/categories`,
      })
    }),
  })
})

export const { useGetCategoriesQuery, useGetProductsQuery, useGetTopSalesQuery, useGetProductItemQuery } = productAPI