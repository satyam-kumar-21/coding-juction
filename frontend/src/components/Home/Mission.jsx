import React from 'react';

const Mission = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut elit
          eu arcu feugiat luctus ut non risus. Sed auctor magna vitae est molestie
          consectetur. Sed at urna a quam eleifend bibendum. Nullam pharetra
          porttitor ligula, eget pulvinar purus dapibus sed.
        </p>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img
          src="https://via.placeholder.com/150"
          className="rounded-lg"
          alt="Mission"
        />
      </div>
    </div>
  );
};

export default Mission;
