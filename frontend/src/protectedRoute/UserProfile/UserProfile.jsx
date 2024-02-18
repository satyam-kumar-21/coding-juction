import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserProfile() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user.user); // Select the user object from Redux store
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is not authenticated, then navigate to "/login"
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Render the UserProfile component
  return (
    <div className="container mx-auto mt-8 bg-gray-100">
      {user ? (
        <div className="text-center mt-16 mb-10 pt-5">
          {/* Display greeting with user's name */}
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Hi {user.name}</h1>
          {/* Button to see profile details */}
          <div className="text-center mb-4">
            <button 
              onClick={() => navigate("/profile/details")} // Navigate to profile details page
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              See Your Profile
            </button>
          </div>
          {/* Render enrolled courses */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h1 className="text-lg font-bold mb-4 text-2xl text-gray-700 font-bold">Enrolled Courses</h1>
            {user.courses && user.courses.length > 0 ? (
              <ul>
                {/* Render two random courses */}
                {user.courses.slice(0, 2).map(course => (
                  <li key={course._id}>{course.title}</li>
                ))}
              </ul>
            ) : (
              <p>No enrolled courses</p> // Message when no enrolled courses
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p> // Display a loading message while user data is being fetched
      )}
    </div>
  );
}

export default UserProfile;
