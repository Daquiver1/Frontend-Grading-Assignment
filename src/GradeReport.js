import Table from './Table.js'
import Header from './Header.js';
import Footer from './Footer.js';
import Navigation from './Navigation.js';

function GradeReport(){
    return(
        <>
        <Header/>
        <>
        <div className ="tableContainer">
        <Navigation/>
        <div>
            <p>Grade Report</p>
        <div className="tableHolder">
            <Table inner ="ACADEMIC YEAR: 2023/24  FIRST SEMESTER"/>
           </div>
           </div>
        </div>
        </>
        <Footer/>
        </>
    );
}

export default GradeReport;