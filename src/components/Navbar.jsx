import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
        <div className="navbar-center hidden lg:flex">
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
            <IoSunnyOutline className="swap-on h-6 w-6" />

            {/* moon icon */}
            <IoMoonOutline className="swap-off h-6 w-6" />
          </label>
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

// <div className="btn btn-ghost btn-circle btn-md ml-4">
//   <IoMoonOutline className="h-6 w-6" />
// </div>;

{
  /* <div className="btn btn-ghost btn-circle btn-md ml-4">
              <IoSunnyOutline className="h-6 w-6" />
            </div> */
}
