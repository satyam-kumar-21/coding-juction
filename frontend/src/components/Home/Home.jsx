import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import WhyWeAreBest from "./WhyWeAreBest";
import Testimonials from "./Testinomials";
import { getAllCourseAction } from "../../store/Action/actionCourse";
import { useDispatch } from "react-redux";
import { getAllLecturesAction } from "../../store/Action/lectureAction";

function Home() {


  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(getAllCourseAction())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, [dispatch]); 

  useEffect(() => {
    dispatch(getAllLecturesAction())
  },[dispatch])

  return (
    <>
      <HeroSection />

      <WhyWeAreBest />

      <Testimonials />
    
    </>
  );
}

export default Home;
