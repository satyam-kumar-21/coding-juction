// AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminDashboard() {
  const isAdmin = useSelector((state) => state.user.user.isAdmin);
  const navigate = useNavigate();

  const token = useSelector((state) => state.user.user.token);

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // Check if the user is not authenticated, then navigate to "/profile"
    if (!isAdmin) {
      navigate("/profile");
    }

    localStorage.setItem("token", token);

    // Set token to axios default headers for subsequent requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, [isAdmin, navigate]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 p-4 ${
          !showSidebar ? "hidden md:block" : ""
        }`}
      >
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <ul className="space-y-2 text-xl font-bold">
          <li>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={() => navigate("/admin/users")}
            >
              Users
            </button>
          </li>
          <li>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={() => navigate("/admin/courses")}
            >
              Courses
            </button>
          </li>
          <li>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={() => navigate("/admin/all-transactions")}
            >
              All Transactions
            </button>
          </li>
        </ul>
      </div>

      {/* Content area */}
      <div className="flex-grow p-4">
        {/* Button to toggle sidebar */}
        <button
          className="md:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ transform: showSidebar ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

      
      </div>
    </div>
  );
}

export default AdminDashboard;
