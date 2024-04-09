import React from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar(){
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/About">About</Link>
					</li>
					<li>
						<Link to="/Projects">Projects</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/About" element={<About></About>}></Route>
				<Route path="/Projects" element={<Projects></Projects>}></Route>
				<Route path="/Contact" element={<Contact></Contact>}></Route>
			</Routes>
		</div>
	);
}