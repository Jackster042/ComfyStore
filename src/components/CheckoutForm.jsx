import React from "react";
import { Form, redirect } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";

import SubmitBtn from "./SubmitBtn";
import FormInput from "./FormInput";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request(formData);
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      // REMOVE QUERY
      queryClient.removeQueries(["orders"]);
      // REST OF CODE
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      // return redirect(`/orders/${response.data.order._id}`);
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errormessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errormessage);
      if (response.status === 401 || 403) return redirect("/login");
      redirect("/login");
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
