import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCourseAction } from "../../../store/Action/actionCourse";


function CourseCard({ course, showDeleteButton }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteCourseAction(course._id)); // Dispatch delete action with course ID
    setIsDeleteModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

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
          {showDeleteButton && (
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 mr-2"
            >
              Delete
            </button>
          )}
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 mr-2">
            Update
          </button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 mr-2">
            Upload Lecture
          </button>
          <button className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600">
            See Lectures
          </button>
        </div>
      </div>
      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this course?</p>
            <div className="flex justify-end">
              <button
                onClick={handleCancelDelete}
                className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCard;
