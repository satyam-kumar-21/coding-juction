import React, { useEffect } from "react";
import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourseAction } from "../../store/Action/actionCourse";

function Course() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.course.data);
  

  useEffect(() => {
    dispatch(getAllCourseAction());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-8 bg-gray-500">
      {courses && courses.map((course) => (
        <CourseCard
          key={course._id}
          title={course.title}
          image={course.profile}
          price={course.mainprice}
          discountedPrice={course.offerprice}
          duration={course.duration}
        />
      ))}
    </div>
  );
}

export default Course;
