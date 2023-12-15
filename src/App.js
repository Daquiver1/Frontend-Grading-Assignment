

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GradeReport from "./pages/GradeReport";
import MissingGradeReport from "./pages/MissingGradeReport";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route path="/Login" element={<Login />} />
				<Route
					path="/Dashboard"
					element={<Dashboard />}
				/>
				<Route path="/GradeReport" element={<GradeReport />} />
				<Route
					path="/MissingGradeReport"
					element={<MissingGradeReport />}
				/>
				<Route
					path="/Contact"
					element={<Contact />}
				/>
				<Route
					path="/Help"
					element={<Help />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
