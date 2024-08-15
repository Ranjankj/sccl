import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/tower3.png";
import { navbarOptions } from "../constants/Config";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const shouldShowClients = location.pathname === "/";

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`bg-[#f5f5f5] md:shadow-md sticky top-0 z-50 h-16`}>
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="md:flex-shrink-0 flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={logo}
            alt="SCCL & Associates Logo"
            className="md:h-[40px] w-auto max-sm:h-10 max-md:h-16"
          />
          <div className="flex flex-col justify-center items-center ml-2 font-semibold text-gray-700">
            <div className="flex ">
              <div className="text-[22px]">SCCL</div>{" "}
              <div className="text-[12px] ml-1 mt-[10px]">and</div>
            </div>
            <div className="text-[16px] mt-[-10px]">Associates</div>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navbarOptions.map((option) =>
            shouldShowClients || option.label !== "Clients" ? (
              <a
                key={option.label}
                href={option.path}
                className="block mt-4 md:mt-0 text-gray-800 hover:text-gray-600"
              >
                {option.label}
              </a>
            ) : null
          )}
        </div>
        {/* Button */}
        <div className="hidden md:block">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => {
              navigate("/getQuote");
            }}
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white w-full h-1/2 flex flex-col items-center justify-center space-y-6 z-40"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-800 focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Navigation Links */}
          {navbarOptions.map((option) =>
            shouldShowClients || option.label !== "Clients" ? (
              <a
                key={option.label}
                href={option.path}
                onClick={handleLinkClick}
                className="text-gray-800 text-xl hover:text-gray-600"
              >
                {option.label}
              </a>
            ) : null
          )}

          {/* Quote Button */}
          <button
            onClick={() => {
              navigate("/getQuote");
              setIsOpen(false);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
