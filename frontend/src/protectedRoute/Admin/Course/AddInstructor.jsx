import React, { useState } from "react";
import AdminDashboard from "../AdminDashboard";

function AddInstructor() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log("Form submitted:", formData);
    // Clear the form fields after submission
    setFormData({ name: "", bio: "", image: "" });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="flex h-auto">
        <AdminDashboard />
        <div
          className="min-h-screen flex items-center w-full justify-center pb-16"
          style={{
            backgroundImage:
              "url('https://imgs.search.brave.com/uh6EsWDYpaCuuI7_UBFZAzSB7gLbb-t7JIkwNk9ZPi8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWFyLXZpZXctcHJv/Z3JhbW1lci13b3Jr/aW5nLWFsbC1uaWdo/dC1sb25nXzEwOTgt/MTg2OTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
            <div className="h-full flex flex-col justify-center space-y-8">
              <div>
                <h2 className="text-center text-3xl font-extrabold text-blue-900">
                  Add Instructor
                </h2>
              </div>
              {/* Conditional rendering for the form */}
              {showForm && (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Form inputs */}
                  <div>
                    <label htmlFor="name" className="">
                      Instructor Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Instructor Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="bio" className="">
                      Instructor Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows="4"
                      cols="40"
                      value={formData.bio}
                      onChange={handleChange}
                      autoComplete="bio"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Instructor Bio"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="image" className="">
                      Instructor Image URL
                    </label>
                    <input
                      id="image"
                      name="image"
                      type="text"
                      value={formData.image}
                      onChange={handleChange}
                      autoComplete="image"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Instructor Image URL"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add Instructor
                    </button>
                  </div>
                </form>
              )}
              {/* Button to toggle the form visibility */}
              <div>
                <button
                  onClick={toggleForm}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {showForm ? "Close Form" : "Add Instructor"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddInstructor;
