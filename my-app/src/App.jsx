import React from "react";
import "./App.scss";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
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
