import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/Projects";    // import Projects page
import Contact from "./components/Contact";      // import Contact page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />       {/* added */}
        <Route path="/contact" element={<Contact />} />         {/* added */}
      </Routes>
    </Router>
  );
}

export default App;
