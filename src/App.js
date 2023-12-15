// filename -App.js

import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/home";
import GradeReport from "./pages/report";
import Dashboard from "./pages/dashboard";
import MissingGradeForm from "./pages/missinggrade";
import InstructorContact from "./pages/instructor";
import HelpandSupport from "./pages/help";
import Login from "./pages/login";



function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/report" element={<GradeReport />} />
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/missinggrade"
					element={<MissingGradeForm />}
				/>
				<Route path="/instructor" element={<InstructorContact />} />
				<Route path="/help" element={<HelpandSupport />} />
        <Route path="/login" element={<Login />} />
			</Routes>
			
		</Router>
	);
}

export default App;
