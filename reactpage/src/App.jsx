import React from 'react';
import Landing from './landing';
import Dashboard from './Dashboard';
import GradeReport from './gradereport';
import Header from './header';
import Footer from './footer';
import HelpAndSupport from './helpandsupport';
import InstructorContact from './instructorcontact';
import Login from './login';

import Navbar from './Navbar';
import './App.css'
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
                        path="/login"
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
                                <div className='NavBoard'>
                                    <div className='Navbar'><Navbar /></div>
                                    <div className='Dashboard'><Dashboard /></div>
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
                                <InstructorContact />
                                <Navbar />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/missinggrade"
                        element={
                            <>
                                <Header />
                                <div className='NavBoard'>
                                    <div className='Navbar'><Navbar /></div>
                                    <div className='Dashboard'><missinggrade/></div>
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
                                <div className='NavBoard'>
                                    <div className='Navbar'><Navbar /></div>
                                    <div className='Dashboard'><GradeReport/></div>
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
                                <HelpAndSupport />
                                <Navbar />
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
