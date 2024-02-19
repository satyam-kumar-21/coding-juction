// CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ id, title, image, price, discountedPrice, duration, enrolled }) {
    const discountPercentage = ((price - discountedPrice) / price * 100).toFixed(2);
  
    return (
      <div className="border rounded-lg bg-white overflow-hidden shadow-md m-8">
        <img src={image} alt={title} className="w-full h-60 object-cover shadow-2xl" />
        <div className="p-4">
          <h1 className="text-lg font-semibold text-gray-900 mb-2">{title}</h1>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-gray-700 text-lg">
                <span className="font-bold text-xl">₹{discountedPrice}</span>
                {discountedPrice < price && (
                  <>
                    <span className="text-gray-500 line-through ml-2">₹{price}</span>
                    <span className="bg-green-400 text-white font-bold px-2 py-1 rounded-full text-sm ml-2">
                      {discountPercentage}% Off
                    </span>
                  </>
                )}
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-gray-600 font-bold text-lg">Duration: <br />{duration}</h2>
            <div>
              <Link to={`/course/${id}`}>
                <button className="bg-blue-500 font-bold text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out">Explore</button>
              </Link>
    
              {enrolled ? (
                <button className="bg-gray-400 font-bold text-white px-4 py-2 rounded-md">Enrolled</button>
              ) : (
                <button className="bg-green-500 font-bold text-white px-4 py-2 rounded-md">Enroll Now</button>
              )}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CourseCard;
  
