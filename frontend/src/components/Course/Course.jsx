import React from "react";
import CourseCard from "./CourseCard";

function Course() {
  return (
    <div className="grid grid-cols-3 bg-blue-200 gap-8">
      <CourseCard
        title="MERN stack development"
        image="https://imgs.search.brave.com/tOFp_XbGp9fcB4om8wqH0ET9hIO0UaNq7TYnl-4sRuQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lm5leHRpZGVhdGVj/aC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMTIvMV9G/VnRDeVJkSjZLT3I0/WXN3VHR3TWVBLmpw/ZWc"
        price={4000}
        discount={10}
        duration="10 weeks"
      />
      <CourseCard
        title="Python for data science"
        image="https://imgs.search.brave.com/w2oGnGzcetrDaAUGIJcGe783bNNwCI5Q3tV7jnxnTtE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcm9k/LWRpc2NvdmVyeS5l/ZHgtY2RuLm9yZy9j/ZG4tY2dpL2ltYWdl/L3dpZHRoPWF1dG8s/aGVpZ2h0PWF1dG8s/cXVhbGl0eT03NSxm/b3JtYXQ9d2VicC9t/ZWRpYS9jb3Vyc2Uv/aW1hZ2UvMzgxYTAw/NDYtNWQ3OC00Nzkw/LTg3NzYtNzQ2MjBk/NTlmNDhlLWUyZTdm/NDY3N2NlMi5zbWFs/bC5qcGVn"
        price={6000}
        discount={5}
        duration="15 weeks"
      />
      <CourseCard
        title="Java full stack"
        image="https://imgs.search.brave.com/zUhxML19RJU8T0qWJNlrW_59_BONMljwfqKPwwZQ4Ko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuamF2YXRwb2lu/dC5jb20vY29yZS9p/bWFnZXMvamF2YS1s/b2dvMS5wbmc"
        price={5000}
        discount={10}
        duration="10 weeks"
      />
    </div>
  );
}

export default Course;
