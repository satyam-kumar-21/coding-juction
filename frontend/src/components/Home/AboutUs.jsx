import React from "react";

const AboutUs = () => {
  const aboutImg = "https://imgs.search.brave.com/sgNnolKN2EOptHWyVbxMiRCjQFUcMXdlzjD9dHSs7I0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDkyOTM3Ny9waG90/by9jbG9zZS11cC1v/Zi1jb21wdXRlci1w/cm9ncmFtbWVyLWNv/ZGluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dmxvQkhr/d0I4azVfWUszTXRf/NUJvbG50VG1qUnFP/Z2tBSzUzMXlzM2hr/bz0"
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 flex items-center justify-center md:pr-8">
          <img src={aboutImg} alt="About Us" className="h-[60%] w-[80%] rounded-lg shadow-md" />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <h3 className="text-xl font-semibold mb-4">Our Story</h3>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            elit eu arcu feugiat luctus ut non risus. Sed auctor magna vitae est
            molestie consectetur. Sed at urna a quam eleifend bibendum. Nullam
            pharetra porttitor ligula, eget pulvinar purus dapibus sed.
          </p>
          <p className="text-lg">
            Nullam ut elit eu arcu feugiat luctus ut non risus. Sed auctor magna
            vitae est molestie consectetur. Sed at urna a quam eleifend
            bibendum. Nullam pharetra porttitor ligula, eget pulvinar purus
            dapibus sed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
