import React from "react";
import { FaSearch } from "react-icons/fa";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { isLoggedIn, logout } = useAuth(); // Get authentication state and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    enqueueSnackbar("Logged out successfully", { variant: "success" });
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="navbar shadow">
      <div className="navbar-start">
        <Link to={"/"} className="btn btn-ghost text-xl hover:bg-white hover:border-0 hover:shadow-none">
          <img src={logo} alt="Logo" className="h-9" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-semibold">
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
          {isLoggedIn && (
            <>
              <li>
                <Link to={"/teammate"} className="hover:bg-purple-200 rounded-lg transition duration-200 flex items-center gap-2">
                  <FaSearch className="text-black hidden md:block" />
                  Teammate
                </Link>
              </li>
              <li>
                <Link to={`/user/profile-update`} className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">
                  Profile
                </Link>
              </li>
            </>
          )}
          <li>
            <Link to={"/contact"} className="hover:text-black hover:bg-purple-200 rounded-lg transition duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end px-2 space-x-5">
        {isLoggedIn && (
          <Link to={"/user/notification"} className="rounded-full w-8 h-8 flex justify-center items-center hover:bg-purple-200">
            <NotificationsNoneOutlinedIcon />
          </Link>
        )}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="rounded-full border px-4 p-1 text-white bg-orange-400 hover:bg-orange-500">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <p className="rounded-full border px-4 p-1 text-white bg-orange-400 hover:bg-orange-500">Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;