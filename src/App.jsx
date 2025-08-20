import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/Nav-Bar/NavBar";
import Services from "./Components/Services/Services";
import Categories from "./Components/Categories/Categorie";
import Contact from "./Components/Contact-Us/Contact";
import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* ✅ Default route for "/" */}
        <Route path="/" element={<Home />} />

        {/* Other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* ✅ Optional: Redirect unknown routes back to "/" */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
