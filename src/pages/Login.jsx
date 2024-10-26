import React from "react";
import { customFetch } from "../utils";
import { Form, Link, redirect, useNavigate } from "react-router-dom";

import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";

import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

// TEST ACTION
// export const action =
//   (store) =>
//   async ({ request }) => {
//     console.log(store);
//     return store;
//   };

//  DEMO USER

const demoUser = {
  identifier: "test@test.com",
  password: "secret",
};

export const action =
  (store) =>
  async ({ request }) => {
    // const dispatch = useDispatch();
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // console.log(data);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", demoUser);
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error.please try later.");
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg  gap-y-4 "
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"

          // defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"

          // defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" className="btn btn-primary" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-secondary capitalize hover:no-underline"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
