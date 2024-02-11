import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AdminDashboard() {

  const isAdmin = useSelector((state) => state.user.user.isAdmin);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is not authenticated, then navigate to "/login"
    if (!isAdmin) {
      navigate("/profile");
    }
  }, [isAdmin, navigate]);

  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard