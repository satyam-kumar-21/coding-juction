import React from 'react';

const Mission = () => {
  return (
    <div className="bg-blue-500 md:p-8 p-2 md:pl-20 flex flex-col md:flex-row items-center rounded-lg shadow-md">
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-lg text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut elit
          eu arcu feugiat luctus ut non risus. Sed auctor magna vitae est molestie
          consectetur. Sed at urna a quam eleifend bibendum. Nullam pharetra
          porttitor ligula, eget pulvinar purus dapibus sed.
        </p>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:h-[60vh] h-[20vh] flex justify-center">
        <img
          src="https://via.placeholder.com/400"
          className="rounded-lg shadow-lg"
          alt="Mission"
        />
      </div>
    </div>
  );
};

export default Mission;
