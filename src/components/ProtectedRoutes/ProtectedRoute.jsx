import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
	const isLoggedIn = window.localStorage.getItem("loggedIn");
    return isLoggedIn === "true" ? <Outlet/> : <Navigate to="login"/>;
  
}

export default ProtectedRoute ;