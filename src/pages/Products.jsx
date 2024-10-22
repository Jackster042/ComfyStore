import React from "react";
import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import PaginationContainer from "../components/PaginationContainer";

import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";

// export const loader = async () => {
//   const response = await customFetch("/products");
//   const products = response.data.data;
//   const meta = response.data.meta;
//   return { products, meta };
// };

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });

  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
};

const Products = () => {
  const { products, meta } = useLoaderData();
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
