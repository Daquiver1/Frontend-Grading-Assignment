import { useState } from 'react';
import styles from './App.module.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {GradeReportPage} from './components/grade-report-page/grade-report-page';
import {MissingGradeForm} from './components/missing-grade-form/missing-grade-form';
import {LoginPage} from './components/login-page/login-page';
import {LandingPage} from './components/landing-page/landing-page';
import {InstructorContactPage} from './components/instructor-contact-page/instructor-contact-page';
import {HelpAndSupportPage} from './components/help-and-support-page/help-and-support-page';
import { DashBoard } from './components/dash-board/dash-board';






function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path='/home' element={<LandingPage />} />
                    <Route path='/dashboard' element={<DashBoard />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/helpAndSupport' element={<HelpAndSupportPage />} />
                    <Route path='/missingGradeForm' element={<MissingGradeForm />} />
                    <Route path='/gradeReport' element={<GradeReportPage />} />
                    <Route path='/instructorContact' element={<InstructorContactPage />} />               
                </Routes>
            </BrowserRouter>  
        </div>
    );
}

export default App;
