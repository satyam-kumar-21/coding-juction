import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import WhyWeAreBest from "./WhyWeAreBest";
import Testimonials from "./Testinomials";
import { getAllCourseAction } from "../../store/Action/actionCourse";
import { useDispatch } from "react-redux";

function Home() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourseAction())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <HeroSection />

      <WhyWeAreBest />

      <Testimonials />
    
    </>
  );
}

export default Home;
