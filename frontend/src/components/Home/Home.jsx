import React from "react";
import HeroSection from "./HeroSection";
import Testimonials from "./Testinomials";
import Stats from "../Stats/Stats";
import Team from "../Teams/Team";

function Home() {

  return (
    <>
      <HeroSection />
      <Stats />
      <Team />
      <Testimonials />
    
    </>
  );
}

export default Home;
