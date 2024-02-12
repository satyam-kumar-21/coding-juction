import React from "react";
import AdminDashboard from "../AdminDashboard";
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function ManageCourse() {
  const navigate = useNavigate();
  const courses = useSelector((state) => state.course.course.data);
  console.log(courses);

  return (
    <>
      <div className="flex h-auto">
        <AdminDashboard />

        <div className="pt-10 flex-1 flex flex-col bg-blue-200">
          <div className="flex justify-center mb-4">
            <button onClick={() => navigate("/admin/courses/create")}  className="bg-blue-900 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded">
              Create New Course
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full ">
            {Array.isArray(courses) && courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))
            ) : (
              <p>No courses available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageCourse;
