import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./components/ErrorElement";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";
import { store } from "./features/store";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";

//  actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

//  store

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: ErrorElement,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: ErrorElement,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: ErrorElement,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
    errorElement: <ErrorElement />,
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction(store),
    errorElement: <ErrorElement />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
