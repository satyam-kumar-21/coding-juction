import React from "react";

function CourseCard({ course }) {
  return (
    <div className=" shadow-2xl  mt-5 pl-10 h-[35vh] pr-20 rounded-lg overflow-hidden flex items-center p-4 w-full">
      {/* Left side */}
      <div className="w-1/3">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Right side */}
      <div className="w-2/3 px-4">
        <h2 className="text-lg font-semibold mb-4">{course.title}</h2>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 mr-2">
            Update
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 mr-2">
            Delete
          </button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 mr-2">
            Upload Lecture
          </button>
          <button className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600">
            See Lectures
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
