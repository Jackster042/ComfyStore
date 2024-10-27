import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

import CheckoutForm from "../components/CheckoutForm";
import SectionTitle from "../components/SectionTitle";
import CartTotals from "../components/CartTotals";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }

  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  console.log(cartTotal);
  if (cartTotal.length === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Checkout;
