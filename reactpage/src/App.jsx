import React from 'react';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Gradereport from './Gradereport';
import Header from './header';
import Footer from './footer';
import Helpandsupport from './Helpandsupport';
import Instructorcontact from './Instructorcontact';
import Missinggrade from './Missinggrade';
import Login from './Login';
import Navbar from './Navbar';
import './App.css';
import Landingheader from './Landingheader'
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
                                <Landingheader />
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
                                <div className='NavBoard'>
                                    <div className='Navbar'><Navbar /></div>
                                    <div className='Dashboard'><Dashboard /></div>
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/Instructorcontact"
                        element={
                            <>
                                <Header />
                                <div className='NavBoard'>
                                    <div className='Navbar'><Navbar /></div>
                                    <div className='Dashboard'><Instructorcontact/></div>
                                </div>
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/Missinggrade"
                        element={
                            <>
                                <Header />
                                <div className='NavBoard'>
                                    <div className='Navbar'><Navbar /></div>
                                    <div className='Dashboard'><Missinggrade /></div>
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
                                <div className='NavBoard'>
                                    <div className='Navbar'><Navbar /></div>
                                    <div className='Dashboard'><Gradereport/></div>
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
                                <div className='NavBoard'>
                                    <div className='Navbar'><Navbar /></div>
                                    <div className='Dashboard'><Helpandsupport/></div>
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
