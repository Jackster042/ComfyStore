import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

// ICONS
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

import NavLinks from "./NavLinks";
import { toggleTheme } from "../features/user/userSlice";

// const themes = {
//   winter: "winter",
//   dracula: "dracula",x`
// };

// const getThemeFromLocalStorage = () => {
//   return localStorage.getItem("theme") || themes.winter;
// };

const Navbar = () => {
  // const [theme, setTheme] = useState(getThemeFromLocalStorage());

  // console.log(numItemsInCart);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
    // toast.success("Theme Changed");
  };

  // const handleTheme = () => {
  //   const { winter, dracula } = themes;
  //   const newTheme = theme === winter ? dracula : winter;
  //   setTheme(newTheme);
  //   toast.success("Theme Changed");
  // };
  // This effect will run every time the theme state changes
  // useEffect(() => {
  //   // Set the data-theme attribute on the document element
  //   // to the current theme state
  //   document.documentElement.setAttribute("data-theme", theme);
  //   // Persist the theme state in local storage
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // This dependency array ensures that the effect will
  // only run when the theme state changes, and not on
  // every render. If the dependency array were empty,
  // the effect would run on every render. If the
  // dependency array included other values, the effect
  // would run every time one of those values changes.

  return (
    <nav className="bg-base-200">
      {/* import global css class */}
      <div className="navbar align-element">
        {/* NAVBAR START */}
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-ghost text-3xl items-center"
          >
            Comfy
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
        <div className="navbar-center hidden gap-x-5 lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        {/* NAVBAR END */}
        <div className="navbar-end">
          {/* theme icons */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleTheme} />

            {/* sun icon */}
            <IoMoonOutline className="swap-off h-6 w-6" />
            <IoSunnyOutline className="swap-on h-6 w-6" />

            {/* moon icon */}
          </label>
          {/* cart */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <FaShoppingCart className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <div className="btn btn-ghost btn-circle btn-md ml-4">
//   <IoMoonOutline className="h-6 w-6" />
// </div>;

{
  /* <div className="btn btn-ghost btn-circle btn-md ml-4">
              <IoSunnyOutline className="h-6 w-6" />
            </div> */
}
