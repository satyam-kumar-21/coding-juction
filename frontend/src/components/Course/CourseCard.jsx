import React from 'react';

function CourseCard({ title, image, price, discount, duration }) {
  // Calculate the price after discount
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <div className="border rounded-lg bg-white overflow-hidden shadow-md m-8">
      <img src={image} alt={title} className="w-full h-60 object-cover shadow-2xl" />
      <div className="p-4">
        <h1 className="text-blue-900 text-xl font-bold mb-2">{title}</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-gray-700 text-bold text-xl">
              {discount > 0 ? (
                <span className="text-red-500 line-through ">₹{price}</span>
              ) : (
                `₹${price}`
              )}
            </h3>
            {discount > 0 && (
              <h2 className="text-green-600 font-bold text-2xl">₹{discountedPrice}</h2>
            )}
          </div>
          {discount > 0 && (
            <span className="bg-green-400 text-yellow-200 text-bold px-2 py-1 rounded-full text-sm">
              {discount}% Off
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-gray-600 text-bold text-lg">Duration: {duration}</h2>
          <div>
            <button className="bg-blue-500 text-bold text-white px-4  py-2 rounded-md mr-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out">Explore</button>
            <button className="bg-green-500 text-bold text-white px-4 py-2 rounded-md  hover:bg-green-600 transition-colors duration-300 ease-in-out">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
