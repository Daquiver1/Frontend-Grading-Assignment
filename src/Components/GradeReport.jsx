import ReportCard from "./ReportCard"
import Header from "./Header"
import Footer from "./Footer"
function GradeReport(){

    return(
        <>
        <Header></Header>
        <input type="text" placeholder='Filter'className="filter"/>
        <ReportCard></ReportCard>
        <Footer></Footer>
        </>
    )

}
export default GradeReport