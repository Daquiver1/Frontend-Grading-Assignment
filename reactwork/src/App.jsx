import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landing';
import Dashboard from './dashboard';
import GradeReport from './gradereport';  // Fix the import statement
import Header from './header';
import Footer from './footer';
import HelpAndSupport from './helpandsupport';  // Fix the import statement
import InstructorContact from './instructorcontact';
import Login from './login';
import MissingGrade from './missinggrade';
import NavBar from './navbar';

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
                        path="/login"
                        element={
                            <>
                                <Login />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/dashboard"
                        element={
                            <>
                                <Header />
                                <div style={{ display: 'flex' }}>
                                    <NavBar />
                                    <Dashboard />
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/instructorcontact"
                        element={
                            <>
                                <Header />
                                <div style={{ display: 'flex' }}>
                                    <NavBar />
                                    <InstructorContact />
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/missinggrade"
                        element={
                            <>
                                <Header />
                                <div style={{ display: 'flex' }}>
                                    <NavBar />
                                    <MissingGrade />
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/gradereport"
                        element={
                            <>
                                <Header />
                                <div style={{ display: 'flex' }}>
                                    <NavBar />
                                    <GradeReport />
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/helpandsupport"
                        element={
                            <>
                                <Header />
                                <div style={{ display: 'flex' }}>
                                    <NavBar />
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
};

export default App;
