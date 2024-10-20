import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import ProductList from "./ProductList";
import ProductsGrid from "./ProductsGrid";

import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  // console.log(totalProducts);

  // STATE FOR TOGGLE BETWEEN GRID AND LIST
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      {totalProducts === 0 ? (
        <h4 className="text-center mt-8">
          No products found matching your search criteria
        </h4>
      ) : layout == "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductList />
      )}
    </>
  );
};

export default ProductsContainer;
