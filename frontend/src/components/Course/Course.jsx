import React, { useEffect } from "react";
import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourseAction } from "../../store/Action/actionCourse";

function Course() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.course.data);
  console.log(courses);

  useEffect(() => {
    dispatch(getAllCourseAction());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-8 bg-gray-100">
      {Array.isArray(courses) && courses.map((course) => (
        <CourseCard
          key={course._id}
          id={course._id} // Pass the id as a prop to CourseCard
          title={course.title}
          image={course.image}
          price={course.price}
          discountedPrice={course.discountedPrice}
          duration={course.duration}
        />
      ))}
    </div>
  );
}

export default Course;
