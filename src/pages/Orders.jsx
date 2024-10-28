import React from "react";
import { useSelector } from "react-redux";

import { useLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { customFetch } from "../utils";

import OrderList from "../components/OrderList";
import PaginationContainer from "../components/PaginationContainer";
import SectionTitle from "../components/SectionTitle";
import ComplexPaginationContainer from "../components/ComplexPaginationContainer";

export const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};
export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("You must be logged in to checkout");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      // const response = await customFetch.get("/orders", {
      //   params,
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // });
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      const orders = response.data.data;
      const meta = response.data.meta;
      // console.log(response);
      return { orders, meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error accessing your orders";
      toast.error(errorMessage);

      if (response.status === 401 || 403) return redirect("/login");

      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  console.log(meta);
  // if (meta.pagination.total < 1) {
  //   return <SectionTitle text="Please make an order" />;
  // }

  return (
    <div>
      <SectionTitle text="Your Orders" />
      <OrderList />
      <ComplexPaginationContainer />
    </div>
  );
};

export default Orders;
