import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center gap-x-6 sm:justify-end">
        <Link to="/login" className="link link-hover text-xs sm:text-sm">
          Sign in / Guest
        </Link>
        <Link to="/register" className="link link-hover text-xs sm:text-sm">
          Create Account
        </Link>
      </div>
    </header>
  );
};

export default Header;
