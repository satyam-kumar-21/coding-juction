import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate  } from "react-router-dom"; // Import useHistory hook
//import { registerUser} from "../../redux/authSlice"; // Import setIsAuthenticated action
import { registerUserAction } from "../../store/Action/actionUser";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    try {
      // Dispatch the registerUser action
      await dispatch(registerUserAction(formData));
      //console.log(formData);
      
      // Redirect to the dashboard route after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration failure (show error message, etc.)
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center pb-16" style={{backgroundImage: "url('https://imgs.search.brave.com/uh6EsWDYpaCuuI7_UBFZAzSB7gLbb-t7JIkwNk9ZPi8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWFyLXZpZXctcHJv/Z3JhbW1lci13b3Jr/aW5nLWFsbC1uaWdo/dC1sb25nXzEwOTgt/MTg2OTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="h-full flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-blue-900">Create your account</h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Form Inputs */}
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input id="confirm-password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
            </div>
            
            {/* Error message */}
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Register
              </button>
            </div>
          </form>
          <div className="text-center text-sm text-gray-600">
            <p>Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
