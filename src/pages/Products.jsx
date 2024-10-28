import React from "react";
import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import PaginationContainer from "../components/PaginationContainer";

import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";

const url = "/products";

// export const loader = async () => {
//   const response = await customFetch("/products");
//   console.log(response);

//   const products = response.data.data;
//   const meta = response.data.meta;
//   return { products, meta };
// };

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    // const response = await customFetch(url, { params });
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    console.log(response);
    // console.log(params);
    // console.log(request.url);

    const products = response.data.data;
    const meta = response.data.meta;
    // console.log(meta);

    return { products, meta, params };
  };

const Products = () => {
  // const { products, meta, params } = useLoaderData();
  // console.log(meta);

  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
