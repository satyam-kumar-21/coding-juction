import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsMobileMenuOpen(false);
    setIsSignupModalOpen(false)
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    setIsMobileMenuOpen(false);
    setIsLoginModalOpen(false)
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about-us" },
    { title: "Courses", path: "/courses" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none fixed-header">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Logo here"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-700 hover:text-indigo-600">
                <Link to={item.path} className="block">
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                onClick={openLoginModal}
                className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                onClick={openSignupModal}
                className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isLoginModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeLoginModal}
        >
          <div
            className="bg-white p-8 rounded-md shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Login openSignupModal={openSignupModal} onClose={closeLoginModal} />
          </div>
        </div>
      )}

      {isSignupModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeSignupModal}
        >
          <div
            className="bg-white p-8 rounded-md shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Register openLoginModal={openLoginModal} onClose={closeSignupModal} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
