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
import CourseDetails from "./components/Course/CourseDetails";
import Admin from "./protectedRoute/Admin/Admin";
import ManageUser from "./protectedRoute/Admin/ManageUser";
import ManageCourse from "./protectedRoute/Admin/Course/ManageCourse";
import ManageTransation from "./protectedRoute/Admin/ManageTransation";
import AddCourse from "./protectedRoute/Admin/Course/AddCourseForm";
import AddInstructor from "./protectedRoute/Admin/Course/AddInstructor";
import ProfileDetails from "./protectedRoute/UserProfile/ProfileDetails";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isAdmin = useSelector((state) => state.user.user.isAdmin);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/profile" /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/profile" /> : <Register />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/profile"
          element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/details"
          element={isAuthenticated ? <ProfileDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/*"
          element={isAdmin ? <Admin /> : <Navigate to="/profile" />}
        />
        <Route
          path="/admin/users"
          element={isAdmin ? <ManageUser /> : <Navigate to="/profile" />}
        />

        <Route
          path="/admin/courses"
          element={isAdmin ? <ManageCourse /> : <Navigate to="/profile" />}
        />
        <Route
          path="/admin/courses/create"
          element={isAdmin ? <AddCourse /> : <Navigate to="/profile" />}
        />

        <Route
          path="/admin/courses/create/add-instructor/:courseId"
          element={isAdmin ? <AddInstructor /> : <Navigate to="/profile" />}
        />

        <Route
          path="/admin/all-transactions"
          element={isAdmin ? <ManageTransation /> : <Navigate to="/profile" />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
