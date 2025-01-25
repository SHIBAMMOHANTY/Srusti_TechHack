import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const profileRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check localStorage for user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle click outside to close profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-[4rem] w-full bg-[#1E3A8A] flex justify-between items-center px-6 md:px-12 lg:px-16">
      {/* Logo */}
      <h1 className="text-white font-bold text-lg md:text-xl">
        AROGRYA <span className="text-green-600">SETU</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white text-md lg:text-lg font-normal">
        <li className="hover:text-green-700 transition-all duration-150 ease-in">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-green-700 transition-all duration-150 ease-in">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-green-700 transition-all duration-150 ease-in">
          <Link to="/doc">Doc</Link>
        </li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[4rem] left-0 w-full bg-black text-white flex flex-col items-center py-4 md:hidden z-10">
          <ul className="flex flex-col gap-4 text-md lg:text-lg font-normal">
            <li className="hover:text-green-700 transition-all duration-150 ease-in">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-green-700 transition-all duration-150 ease-in">
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="hover:text-green-700 transition-all duration-150 ease-in">
              <Link to="/doc" onClick={toggleMenu}>
                Doc
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Login or Profile Dropdown */}
      <div className="hidden md:flex items-center relative">
        {!user ? (
          <div className="relative" ref={profileRef}>
            <button
              className="text-white text-xl focus:outline-none"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <FaUserCircle className="w-8 h-8" />
            </button>
            {isProfileOpen && (
  <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-20 border border-gray-200">
    {/* <h3 className="text-lg font-bold text-blue-600 mb-4 text-center">
      Dashboard
    </h3> */}
    <div className="border-b border-gray-200 pb-3 mb-3">
      <p className="text-sm text-gray-600">
        <span className="font-semibold block">Username:</span> Akash
      </p>
    </div>
    <div className="border-b border-gray-200 pb-3 mb-3">
      <p className="text-sm text-gray-600">
        <span className="font-semibold block">Email:</span> aaa@gmail.com
      </p>
    </div>
    <div className="text-center">
      <Link
        to="/dashboard/analytics"
        className="inline-block bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Go to Dashboard
      </Link>
    </div>
  </div>
)}

          </div>
        ) : (
          <button className="bg-white text-blue-400 px-5 py-1 rounded-md">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
