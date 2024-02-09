import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch hook
import { loginUser } from "../../redux/authSlice"; // Import loginUser action

function Login() {
  const dispatch = useDispatch(); // Get dispatch function
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the loginUser action with form data
    dispatch(loginUser(formData))
      .then(() => {
        // Redirect to dashboard upon successful login
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // Handle login failure (show error message, etc.)
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center pb-16 bg-cover bg-center" style={{backgroundImage: `url('https://imgs.search.brave.com/uh6EsWDYpaCuuI7_UBFZAzSB7gLbb-t7JIkwNk9ZPi8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWFyLXZpZXctcHJv/Z3JhbW1lci13b3Jr/aW5nLWFsbC1uaWdo/dC1sb25nXzEwOTgt/MTg2OTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc')`}}>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="h-full flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-blue-900">Sign in to your account</h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="text-sm text-center">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center text-sm text-gray-600">
            <p>Or <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">create a new account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
