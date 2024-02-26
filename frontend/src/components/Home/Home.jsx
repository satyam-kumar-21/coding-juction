import React from "react";
import HeroSection from "./HeroSection";
import Testimonials from "./Testinomials";
import Stats from "../Stats/Stats";
import Team from "../Teams/Team";
import LetUs from "../Contact/LetUs";

function Home() {

  return (
    <>
      <HeroSection />
      <Stats />
      <Team />
      <Testimonials />
      <LetUs />
    
    </>
  );
}

export default Home;
