import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Course from "./components/Course/Course";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UserProfile from "./protectedRoute/UserProfile/UserProfile";
import AdminDashboard from "./protectedRoute/Admin/AdminDashboard";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isAdmin = useSelector((state) => state.user.user.isAdmin);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect to profile route if already authenticated */}
        {isAuthenticated && (
          <Route path="/login" element={<Navigate to="/profile" />} />
        )}
        {isAuthenticated && (
          <Route path="/register" element={<Navigate to="/profile" />} />
        )}
        {/* Render Login component only if not authenticated */}
        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        {/* Render Register component only if not authenticated */}
        {!isAuthenticated && <Route path="/register" element={<Register />} />}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Protected route for UserProfile */}
        <Route
          path="/profile"
          element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />}
        />

        <Route
          path="/dashboard"
          element={isAdmin ? <AdminDashboard /> : <Navigate to="/profile" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
