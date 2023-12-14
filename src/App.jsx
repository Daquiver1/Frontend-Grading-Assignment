import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/head.jsx';
import LoginMain from './Components/Login-main.jsx';
import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard.jsx';
import MissingGrade from './Components/MissingGrade.jsx';
import Contact from './Components/Contact.jsx';
import Help from './Components/Help.jsx';
import GradeReport from './Components/GradeReport.jsx';
function App() {

    return(
   <>
     <Routes>
        <Route path="/" element={<Head></Head>}/>
        <Route path="/sk" element={<Dashboard name="Joseph Acheampong" id="11252709" program="Computer Science" level="200"></Dashboard>}/>
        <Route path="/book" element={<GradeReport></GradeReport>}/>
        <Route path="/ms" element={<MissingGrade></MissingGrade>}/>
        <Route path="/you" element={<LoginMain></LoginMain>}/>
        <Route path="/ci" element={<Contact></Contact>}/>
        <Route path="/help" element={<Help></Help>}/>
    </Routes>  
    </>
    )
    }
export default App
