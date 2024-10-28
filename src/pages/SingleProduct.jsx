import React from "react";
import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatPrice, generateAmount } from "../utils";

import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
// import { QueryClient } from "@tanstack/react-query";

const singleProductQuery = (id) => {
  queryKey: ["singleProduct", id],
  queryFn: () => customFetch(`/products/${id}`),
}

export const loader = (queryClient) => async ({ params }) => {
  // const response = await customFetch(`/products/${params.id}`);
  const response = await customFetch.ensureQueryData(singleProductQuery(params.id))
  // console.log(response);
  return { product: response.data.data };
});

const SingleProduct = () => {
  const { product } = useLoaderData();
  const dispatch = useDispatch();
  const { category, company, description, image, price, title, colors } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16 ">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full shadow-xl hover:shadow-2xl transition duration-300"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`
                  badge w-6 h-6 mr-2 ${
                    color === productColor && "border-2 border-secondary"
                  }
                  `}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              value={amount}
              onChange={handleAmount}
              className="select select-secondary select-bordered select-md"
            >
              {/* <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3 </option> */}
              {generateAmount(5)}
            </select>
          </div>
          {/* CART BUTTON */}
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              // onClick={() => console.log(`${amount} of ${title} added to bag`)}
              onClick={addToCart}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
