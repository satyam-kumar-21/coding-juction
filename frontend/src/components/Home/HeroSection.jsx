import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="relative bg-gray-900">
      <img
        className="w-full h-80vh object-cover md:h-screen"
        src="https://imgs.search.brave.com/uh6EsWDYpaCuuI7_UBFZAzSB7gLbb-t7JIkwNk9ZPi8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWFyLXZpZXctcHJv/Z3JhbW1lci13b3Jr/aW5nLWFsbC1uaWdo/dC1sb25nXzEwOTgt/MTg2OTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
        alt="Hero"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-4xl  tracking-widest sm:text-5xl md:text-6xl font-bold mb-4">
          Welcome to India's <br />
          <span className="text-blue-500">Best coding platform.</span>{" "}
        </h1>
        <h3 className="text-lg text-bold sm:text-xl md:text-2xl mb-8">
          <b className="tracking-widest text-gray-300">
            <br />
            Explore India's leading coding platform, where excellence and
            innovation converge. <br />{" "}
            <span>Embark on your coding journey with us today!</span>
          </b>
        </h3>
        <Link
          to="/courses"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full text-lg sm:text-xl md:text-2xl font-bold uppercase mb-4"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
