// Navigation.js

import { useState } from 'react';
import DashboardPage from './DashboardPage';
import GradeReport from './GradeReport';
import MissingGrade from './MissingGrade';
import HelpAndSupport from './HelpAndSupport';
import "./Navigation.css";

const Navigation = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <DashboardPage />;


            case 'ViewGrade':
                return <GradeReport />;
            case 'MissingGrade':
                return <MissingGrade />;
            case 'HelpAndSupport':
                return <HelpAndSupport />;
            case 'GradeReport':
                return <GradeReport />;
            case 'HomeAndSupport':
                return <HelpAndSupport />;


            default:
                return <DashboardPage />;
        }
    };

    return (
        <div>
            {/* Navigation Buttons */}
            <nav >
                <button onClick={() => setCurrentPage('LandingPage')}>Dashboard</button>
                <button onClick={() => setCurrentPage('GradeReport')}> Grade Report</button>
                <button onClick={() => setCurrentPage('MissingGrade')}>MissingGrade</button>
                <button onClick={() => setCurrentPage('HomeAndSupport')}>HomeAndSupport</button>
                <button onClick={() => setCurrentPage('HelpAndSupport')}>Contact</button>

            </nav>

            {/* Render the current page */}
            {renderPage()}
        </div>
    );
};

export default Navigation;
