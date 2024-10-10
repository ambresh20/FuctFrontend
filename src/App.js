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
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./components/Login";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AdminLogin from "./components/Admin/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";

// Blog Components
import BlogList from "./components/Blogs/BlogList";
import BlogDetails from "./components/Blogs/BlogDetails";
import EditBlog from "./components/Blogs/EditBlog";
import CreateBlog from "./components/Blogs/CreateBlog";
import CategoryPage from "./components/Blogs/CategoryPage";
import TagPage from "./components/Blogs/TagPage";



function App() {
  const location = useLocation();
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const userType = window.localStorage.getItem("userType");

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} userType={userType} />

      {location.pathname === "/" && (
        <div>
          <Home />
          <Features />
          <AboutUs />
          <Services />
          <Gallery />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Team />} />
          {/* unauthorized route */}
          {!isLoggedIn && (
            <>
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin-login" element={<AdminLogin />} />
            </>
          )}

           {/* ProtectedRoutes */} 
           <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
            {userType !== "admin" ? (
              <>
                <Route path="/" element={<Navigate to="/user-dashboard" />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/admin-dashboard" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/admin-dashboard" />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/user-dashboard" element={<Navigate to="/" />} />
              </>
            )}
          </Route>

        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/api/user/reset-password/:token"
          element={<ResetPassword />}
        />


        {/* Blog Routes */}
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs/category/:category" element={<CategoryPage />} />
        <Route path="/blogs/tag/:tag" element={<TagPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

