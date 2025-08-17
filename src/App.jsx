import React from "react";
import NavBar from "./Components/Nav-Bar/NavBar";
import Services from "./Components/Services/Services";
import Categories from "./Components/Categories/Categorie";
import Contact from "./Components/Contact-Us/Contact";
import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Uncomment if you want to use these later
// import Teams from "./Components/Team-members/Teams";
// import Art from "./Components/Art/Art";
// import Drama from "./Components/Drama/Drama";
// import Music from "./Components/Movement & Music/Music";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          {/* Uncomment if you import them */}
          {/* <Route path="/art" element={<Art />} /> */}
          {/* <Route path="/drama" element={<Drama />} /> */}
          {/* <Route path="/music" element={<Music />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
