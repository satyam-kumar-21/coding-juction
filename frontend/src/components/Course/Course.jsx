import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourseAction } from "../../store/Action/actionCourse";
import { initiatePaymentAction } from "../../store/Action/paymentAction";

function Course() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.course?.data); // Use optional chaining here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllCourseAction())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, [dispatch]);

  const checkoutHandler = async (price) => {
    try {
        const paymentData = {
            amount: price , // Convert price to the smallest currency unit (e.g., paise for INR)
            currency: "INR",
            // Add any other required data for the payment
        };

        const data = await dispatch(initiatePaymentAction(paymentData));

        console.log("Order details:", data); 
    } catch (error) {
        console.error("Error during checkout:", error);
    }
};


  

  

  return (
    <div className="grid grid-cols-3 gap-8 bg-gray-100">
      {loading ? (
        <div>Loading...</div>
      ) : Array.isArray(courses) && courses.length > 0 ? (
        courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id} // Pass the id as a prop to CourseCard
            title={course.title}
            image={course.image}
            price={course.price}
            discountedPrice={course.discountedPrice}
            duration={course.duration}
            checkoutHandler={checkoutHandler}
          />
        ))
      ) : (
        <div className="h-80 w-full flex justify-center items-center text-gray-500">
          <h1 className="font-bold text-2xl right-7 pl-10">
            No courses available
          </h1>
        </div>
      )}
    </div>
  );
}

export default Course;
