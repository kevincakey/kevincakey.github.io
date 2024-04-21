import React from "react";
import "./App.scss";
import Navbar from "./components/NavBar/Navbar";
import Banner from "./components/Banner/Banner";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar></Navbar>
        <Banner></Banner>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Projects" element={<Projects></Projects>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
