import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector hook

function Header() {
  const isAuthenticate = useSelector((state) => state.user.isAuthenticated);

  const admin = useSelector((state) => state.user.user.isAdmin);

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("state");
    // dispatch(logoutUserAction());
    dispatch(logoutUserAction());
  };

  return (
    <>
      <div className="h-16 w-full bg-white fixed top-0 flex justify-between items-center pl-20 pr-20 z-50 shadow-md">
        <div className="flex items-center">
          {/* Logo */}
          <h1 className="text-blue-900 text-2xl font-bold">CODING JUNCTION</h1>
        </div>

        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <Link
            to="/"
            className="text-blue-900 font-bold text-lg hover:underline"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-blue-900 font-bold text-lg hover:underline"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="text-blue-900 font-bold text-lg hover:underline"
          >
            Contact
          </Link>

          {/* Conditional rendering for Login and Profile links */}
          {!isAuthenticate ? (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center">
              {admin ? (
                <Link
                to="/admin"
                className="text-blue-900 font-bold text-lg hover:underline"
              >
                Admin Dashboard
              </Link>
              ) : (
                <Link
                  to="/profile"
                  className="text-blue-900 font-bold text-lg hover:underline"
                >
                  My Courses
                </Link>
              )}
               

              <Link
                to="/"
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 ml-4 rounded-full shadow-md transition duration-300"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16">{/* Routes */}</div>
    </>
  );
}

export default Header;
