// UserProfile.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CourseCard from "./CourseCard";
import { getAllCourseAction } from "../../store/Action/actionCourse";
import { getOneCourseAction } from "../../store/Action/actionCourse";

function UserProfile() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user); // Select the user object from Redux store
  const courses = useSelector((state) => state.course.course.data); // Select the courses array from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(courses);

  // useEffect(() => {
  //   dispatch(getAllCourseAction());
  // }, [dispatch]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllCourseAction())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, [dispatch]);

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
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">
            Hi {user.name}
          </h1>
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
            <h1 className="text-lg font-bold mb-4 text-2xl text-gray-700 font-bold">
              Enrolled Courses
            </h1>
            {user.courses && user.courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Render enrolled courses in rows of three */}
                {user.courses.map((courseId) => {
                  const course = courses.find((c) => c._id === courseId);
                  if (course) {
                    return (
                      <CourseCard
                        key={course._id}
                        id={course._id}
                        title={course.title}
                        image={course.image}
                        price={course.price}
                        discountedPrice={course.discountedPrice}
                        duration={course.duration}
                        enrolled={true}
                      />
                    );
                  } else {
                    // Fetch course details if not found in the Redux store
                    // dispatch(getOneCourseAction(courseId));
                    return null
                  }
                  return null;
                })}
              </div>
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
