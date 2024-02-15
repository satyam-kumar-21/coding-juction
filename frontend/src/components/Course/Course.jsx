import React, { useEffect } from "react";
import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourseAction } from "../../store/Action/actionCourse";

function Course() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.course?.data); // Use optional chaining here

  useEffect(() => {
    dispatch(getAllCourseAction());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-8 bg-gray-100">
      {Array.isArray(courses) && courses.length > 0 ? (
        courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id} // Pass the id as a prop to CourseCard
            title={course.title}
            image={course.image}
            price={course.price}
            discountedPrice={course.discountedPrice}
            duration={course.duration}
          />
        ))
      ) : (
        <div className="h-80 w-full flex justify-center items-center text-gray-500">
          <h1 className="font-bold text-2xl right-7 pl-10">No courses available</h1>
        </div>
      )}
    </div>
  );
}

export default Course;
