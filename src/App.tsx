import { useState } from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/home-page/home-page';
import { LoginPage } from './components/login-page/login-page';
import { Dashboard1 } from './components/dashboard-1/dashboard-1';
import { GradeReport } from './components/grade-report/grade-report';
import { HelpAndSupport } from './components/help-and-support/help-and-support';
import { MissingGradeForm1 } from './components/missing-grade-form-1/missing-grade-form-1';
import { InstructorContact } from './components/instructor-contact/instructor-contact';


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App } >
            <BrowserRouter>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/dashboard' element={<Dashboard1 />} />
                    <Route path='/helpandSupport' element={<HelpAndSupport />} />
                    <Route path='/missingGradeForm' element={<MissingGradeForm1 />} />
                    <Route path='/gradeReport' element={<GradeReport />} />
                    <Route path='/instructorContact' element={<InstructorContact id={0} name={''} email={''} />} />               
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
