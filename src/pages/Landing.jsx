import React from "react";
import Hero from "../components/Hero";
import { customFetch } from "../utils";
import FeaturedProducts from "../components/FeaturedProducts";

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  // SWAP THIS FOR QUERY CLIENT

  // const response = await customFetch.get(url);
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  // console.log(response);

  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
