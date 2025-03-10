import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png';

function NavBar() {

  const navlist = (
    <>
      <li>
        <a className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">Home</a>
      </li>
      <li>
        <a className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">About Us</a>
      </li>
      <li>
        <a className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">
          {" "}
          <FaSearch className="text-black dark:text-white dark:hover:text-black" />
          Teammate
        </a>
      </li>
      <li>
        <a className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">Profile</a>
      </li>
      <li>
        <a className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">Contact</a>
      </li>
    </>
  );

  return (

    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  font-semibold rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            {navlist}

          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img src={logo} alt="Logo" className="h-20 w-22 object-contain" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-semibold " >
          {navlist}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}

export default NavBar;
