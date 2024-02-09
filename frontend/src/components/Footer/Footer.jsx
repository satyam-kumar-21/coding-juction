import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Follow Us Section */}
        <div>
          <h1 className="text-lg font-bold mb-4">Follow Us</h1>
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full hover:bg-blue-600">
              <i className="fab fa-linkedin-in text-white text-xl"></i>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full hover:bg-blue-600">
              <i className="fab fa-facebook-f text-white text-xl"></i>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full hover:bg-blue-600">
              <i className="fab fa-instagram text-white text-xl"></i>
            </a>
            {/* Twitter */}
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full hover:bg-blue-600">
              <i className="fab fa-twitter text-white text-xl"></i>
            </a>
          </div>
        </div>
        {/* Quick Links Section */}
        <div>
          <h1 className="text-lg font-bold mb-4">Quick Links</h1>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/courses" className="hover:text-blue-500">Courses</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
          </div>
        </div>
        {/* Resources Section */}
        <div>
          <h1 className="text-lg font-bold mb-4">Resources</h1>
          <div className="flex flex-col space-y-2">
            <Link to="/faq" className="hover:text-blue-500">FAQ</Link>
            <Link to="/support" className="hover:text-blue-500">Support</Link>
            <Link to="/terms" className="hover:text-blue-500">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-blue-500">Privacy Policy</Link>
          </div>
        </div>
        {/* Newsletter Section */}
        <div>
          <h1 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h1>
          <form className="flex">
            <input type="email" placeholder="Your email address" className="bg-gray-700 text-white rounded-l-md px-4 py-2 focus:outline-none focus:bg-gray-600" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-md px-4 py-2 focus:outline-none">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Coding juction. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
