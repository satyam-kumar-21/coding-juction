import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector hook

function Header() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Access isAuthenticated state from Redux store

  const user = useSelector((state) => state.user.users[0]); // Get the first user from the users array
  const pic = user && user.newUser ? user.newUser.pic : null; // Check if user and newUser exist before accessing pic
  
  //console.log(pic);
  
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
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300"
            >
              Login
            </Link>
          ) : (
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Link to="/profile">
                <img
                  src={pic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
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
