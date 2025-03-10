import React from "react";
import { FaSearch } from "react-icons/fa";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {

  const loginUser = {
    _id: '45454554445'
  }

  const navlist = (
    <>
      <li>
        <Link to={"/"} className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/about"} className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">
          About Us
        </Link>
      </li>
      <li>
        <Link to={"/teammate"} className="hover:bg-purple-200 rounded-lg transition duration-200 flex items-center gap-2">
          <FaSearch className="text-black hidden md:block" />
          Teammate
        </Link>
      </li>
      <li>
        <Link to={`/user/profile/${loginUser?._id}`} className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">
          Profile
        </Link>
      </li>
      <li>
        <Link to={"/contact"} className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white font-semibold rounded-box z-10 mt-3 w-52 p-2 shadow gap-3">
            {navlist}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl hover:bg-white hover:border-0 hover:shadow-none">
          <img src={logo} alt="Logo" className="h-9" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-semibold">{navlist}</ul>
      </div>
      <div className="navbar-end px-2 space-x-5">
        <Link to={"/user/notification"} className="rounded-full w-8 h-8 flex justify-center items-center hover:bg-purple-200">
          <NotificationsNoneOutlinedIcon />
        </Link>
        <Link to={"/login"}>
          <p className="rounded-full border px-4 p-1 text-white bg-orange-400 hover:bg-orange-500">Login</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
