import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PropertyProvider } from "./context/PropertyContext";
import PropertiesPage from "./pages/property/PropertiesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import Profile from "./components/Profile";
// import Profile from "./pages/Profile";
// import PropertyForm from "./pages/property/PropertyForm";

const App: React.FC = () => (
  <PropertyProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<Login />} />
        <Route path="property" element={<PropertiesPage />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Profile />

      <Footer />
    </BrowserRouter>
  </PropertyProvider>
);

export default App;
