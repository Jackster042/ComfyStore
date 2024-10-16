import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error_404.svg";

const Error = () => {
  const error = useRouteError();
  // console.log(error);

  if (error.status === 404) {
    return (
      <main className="flex items-center justify-center text-center ">
        <div>
          <img
            src={errorImg}
            alt="not found"
            className="w-90vw mw-600px block mt-9 mb-4"
          />
          <h3>Ohh! Page not found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/" className="capitalize text-emerald-600">
            back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div>
        <h1>Something went wrong</h1>
      </div>
    </main>
  );
};

export default Error;
