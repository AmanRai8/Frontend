import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PropertyProvider } from "./context/PropertyContext";
import { AuthProvider } from "./context/AuthContext"; // ✅ import AuthProvider
import PropertiesPage from "./pages/property/PropertiesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
// import PropertyForm from "./pages/property/PropertyForm";

const App: React.FC = () => (
  <AuthProvider>
    <PropertyProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<Login />} />
          <Route path="property" element={<PropertiesPage />} />
          <Route path="AdminDashboard" element={<AdminDashboard />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>

        <Profile />
        <Footer />
      </BrowserRouter>
    </PropertyProvider>
  </AuthProvider>
);

export default App;
