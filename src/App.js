import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Registration from "./components/Registration";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AdminLogin from "./components/Admin/Login" ;
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserDashboard from "./components/UserDashboard";



function App() {
  const location = useLocation();  

  return (
    <div >
      <Navbar />

      {location.pathname === "/" && (
        <div>
          <Home />
          <Features />
          <AboutUs />
          <Services />
          <Gallery />
          <Team />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/api/user/reset-password/:token" element={<ResetPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
