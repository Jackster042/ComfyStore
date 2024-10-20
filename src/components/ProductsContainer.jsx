import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import ProductList from "./ProductList";
import ProductsGrid from "./ProductsGrid";

import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  return (
    <>
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-lg font-medium tracking-wider">22 products</h2>
      </div>
      <ProductList />
    </>
  );
};

export default ProductsContainer;
