// AdminDashboard.jsx
import React, { useEffect} from "react";
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminDashboard() {
  const isAdmin = useSelector((state) => state.user.user.user.isAdmin);
  const navigate = useNavigate();

  const token = useSelector((state) => state.user.user.token)

  useEffect(() => {
    // Check if the user is not authenticated, then navigate to "/profile"
    if (!isAdmin) {
      navigate("/profile");
    }

    localStorage.setItem("token", token);

    // Set token to axios default headers for subsequent requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, [isAdmin, navigate]);


 


  return (
    <div className="flex h-auto">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-4 ">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <ul className="space-y-2 text-xl font-bold">
          <li>
            <button className="w-full  bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => navigate("/admin/users")}>
              Users
            </button>
          </li>
          <li>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => navigate("/admin/courses")}>
              Courses
            </button>
          </li>
        
          <li>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => navigate("/admin/all-transactions")}>
              All Transactions
            </button>
          </li>

        </ul>
      </div>

      
    </div>
  );
}

export default AdminDashboard;
