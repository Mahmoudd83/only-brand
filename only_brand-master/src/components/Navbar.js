import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloseIcon from "@mui/icons-material/Close";
import RestoreIcon from "@mui/icons-material/Restore";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Register from "./LoginSignupModal";

const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(location.pathname);

  const handleChange = (event) => {
    const path = event.target.value;
    if (path) {
      navigate(path);
    }
  };

  const handleSignInOpen = () => {
    setPreviousPath(location.pathname); // حفظ الصفحة الحالية
    setIsSignInOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleSignInClose = () => {
    setIsSignInOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSignInSuccess = () => {
    setIsSignInOpen(false);
    document.body.style.overflow = "auto";
    navigate(previousPath); // العودة إلى الصفحة السابقة
  };

  return (
    <div className="flex justify-between items-center lg:p-4 md:p-4">
      <div className="flex justify-between md:px-6 lg:px-8 md:hidden lg:flex sm:hidden xs:hidden">
        <Link to="/">
          <li className="mr-10 list-none cursor-pointer text-gray-600">
            New Arrival
          </li>
        </Link>
        <Link to="/men">
          <li className="mr-10 list-none cursor-pointer text-gray-600">Men</li>
        </Link>
        <Link to="/women">
          <li className="mr-10 list-none cursor-pointer text-gray-600">
            Women
          </li>
        </Link>
      </div>
      <select
        className="md-text-sm lg:hidden md:flex xs:hidden pr-5 xs-text-xs w-30"
        onChange={handleChange}
      >
        <option value="/">New Arrival</option>
        <option value="/men">Men</option>
        <option value="/women">Women</option>
      </select>

      <div className="md:flex lg:flex xs:hidden sm:hidden">
        <Link to="/">
          <img
            src="/images/logo/logo yet.png"
            width={130}
            alt="logo"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex justify-between sm:hidden xs:hidden lg:flex md:flex space-x-6">
        <li className="lg:px-8 list-none cursor-pointer">
          <Link to="/search">
            <SearchIcon className="text-gray-600" />
          </Link>
        </li>
        <li className="lg:px-8 list-none cursor-pointer">
          <Link to="/FavoritePage">
            <FavoriteBorderIcon className="text-gray-600" />
          </Link>
        </li>
        <li className="lg:px-8 list-none cursor-pointer">
          <Link to="/cart">
            <ShoppingCartIcon className="text-gray-600" />
          </Link>
        </li>
        <li className="lg:px-5 list-none cursor-pointer">
          <PersonOutlineIcon
            className="text-gray-600"
            onClick={handleSignInOpen}
          />
        </li>
      </div>

      <div className="flex flex-col items-center relative p-4 space-y-4 w-full mx-auto sm:flex xs:flex md:hidden lg:hidden">
        <div className="flex items-center justify-between w-full max-w-md">
          <select
            className="border-none bg-transparent text-gray-700 text-sm focus:outline-none"
            onChange={handleChange}
          >
            <option value="/">New Arrival</option>
            <option value="/men">Men</option>
            <option value="/women">Women</option>
          </select>
          <Link to="/">
            <img
              className="cursor-pointer w-20 sm:w-24 xs:w-20 absolute top-4 left-44"
              src="/images/logo/logo yet.png"
              alt="logo"
            />
          </Link>
          <Link to="/FavoritePage">
            <FavoriteBorderIcon className="text-gray-500 absolute top-5 right-10" />
          </Link>
        </div>
        <div className="flex items-center w-full max-w-md p-2 border border-gray-300 rounded-full bg-white">
          <SearchIcon className="text-gray-500" />
          <input
            type="text"
            placeholder="Search For Only Brand"
            className="flex-grow px-2 text-gray-700 bg-transparent border-none focus:outline-none"
          />
          <button>
            <RestoreIcon className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-gray-200 p-3 flex justify-around items-center sm:flex xs:flex md:hidden lg:hidden z-50">
        <Link to="/">
          <HomeIcon className={`text-gray-600 ${location.pathname === '/' ? 'text-black bg-gray-200 p-2 rounded-full' : ''}`} />
        </Link>
        <Link to="/search">
          <SearchIcon className={`text-gray-600 ${location.pathname === '/search' ? 'text-black bg-gray-200 p-2 rounded-full' : ''}`} />
        </Link>
        <Link to="/cart">
          <ShoppingCartIcon className={`text-gray-600 ${location.pathname === '/cart' ? 'text-black bg-gray-200 p-2 rounded-full' : ''}`} />
        </Link>
        <Link to="/Register">
          <PersonOutlineIcon className={`text-gray-600 ${location.pathname === '/Register' ? 'text-black bg-gray-200 p-2 rounded-full' : ''}`} />
        </Link>
      </div>

      {isSignInOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleSignInClose}
        >
          <div
            className="secform bg-white p-6 rounded-lg shadow-lg w-96 relative signInModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleSignInClose}
              className="absolute top-0 right-3 text-gray-600 cursor-pointer"
              style={{
                padding: "0 10px",
                borderRadius: "50%",
                backgroundColor: "transparent",
                border: "none",
                zIndex: 1000,
                top: "-12rem",
                transition: "top 0.3s ease",
              }}
            >
              <CloseIcon className="text-gray-600" />
            </button>
            <Register onSuccess={handleSignInSuccess} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
