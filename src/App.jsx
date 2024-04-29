import React from "react";
import "./App.scss";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/NavBar/Navbar";
import Banner from "./components/Banner/Banner";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <div id="cover"></div>
        {!isHome && (
          <AnimatePresence mode="wait">
            <Banner />
          </AnimatePresence>
        )}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
