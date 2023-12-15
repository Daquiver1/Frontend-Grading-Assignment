import React from 'react';
import Landing from './LandingPage';
import Dashboard from './Dashboard';
import GradeReport from './GradeReport';
import Header from './Header';
import Footer from './Footer';
import HelpAndSupport from './HelpAndSupport';
import InstructorContact from './InstructorContact';
import Login from './Login';
import MissingGradeForm from './MissingGradeForm';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Landing />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/Login"
                        element={
                            <>
                                <Login />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/Dashboard"
                        element={
                            <>
                                <Header />
                                <div>
                                <Navbar />
                                <Dashboard />
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/InstructorContact"
                        element={
                            <>
                                <Header />
                                <div>
                                <Navbar />
                                <InstructorContact />
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/MissingGradeForm"
                        element={
                            <>
                                <Header />
                                <div>
                                <Navbar />
                                <MissingGradeForm />
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/Gradereport"
                        element={
                            <>
                                <Header />
                                <div>
                                <Navbar />
                                <GradeReport />
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/Helpandsupport"
                        element={
                            <>
                                <Header />
                                <div>
                                <Navbar />
                                <HelpAndSupport />
                                </div>
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
