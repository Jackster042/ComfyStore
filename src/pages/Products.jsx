import React from "react";
import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import PaginationContainer from "../components/PaginationContainer";

import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";

export const loader = async () => {
  const response = await customFetch("/products");
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  const { products, meta } = useLoaderData();
  // console.log(meta);

  return (
    <div>
      {/* <h1>Products</h1> */}
      <Filters />
      <ProductsContainer />
      {/* <PaginationContainer /> */}
    </div>
  );
};

export default Products;
