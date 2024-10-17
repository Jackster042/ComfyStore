import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      {/* import global css class */}
      <div className="navbar align-element">
        {/* NAVBAR START */}
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        {/* NAVBAR CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        {/* NAVBAR END */}
        <div className="navbar-end">
          {/* theme icons */}
          <div className="btn btn-ghost btn-circle btn-md ml-4">
            <IoSunnyOutline className="h-6 w-6" />
          </div>
          {/* cart */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <FaShoppingCart className="h-6 w-6" />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
