import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const location = useLocation();
  const adminToken = localStorage.getItem('adminToken');
  
  if (!adminToken) {
    // Redirect to admin login page, saving the attempted location
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  
  return children;
};

export default AdminProtectedRoute;
