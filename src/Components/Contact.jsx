import Header from "./Header";
import Footer from "./Footer";
import Instructor from "./Instructor";
function Contact (){

    return(
        <>
        <Header></Header>
        <main>
            <div className="welcome-message">
                <h1>Contact Instructors</h1>
            </div>
            <Instructor code='DCIT201' title='PROGRAMMING 1' instructor='PAUL NII' phone='0257220301' office='CS50' hours='MONDAYS' ></Instructor><br /><br />
            <Instructor code='DCIT203' title='LOGIC DESIGN' instructor='DWOMFOUR AZIZ' phone='0228280284' office='CS57' hours='WEDNESDAYS' ></Instructor><br /><br />
            <Instructor code='DCIT205' title='MULTIMEDIA AND WEB DESIGN' instructor='SORLI MICHAEL' phone='0549889093' office='CS59' hours='FRIDAYS' ></Instructor><br /><br />
            <Instructor code='DCIT207' title='COMPUTER ARCHITECTURE' instructor='JOSEPH ODURO' phone='0245235903' office='CS77' hours='TUEDDAYS' ></Instructor><br /><br />
            <Instructor code='DCIT209' title='E-BUSINESS ARCHITECTURE' instructor='OSEI TUTU' phone='0247280301' office='CS80' hours='MONDAYS' ></Instructor><br /><br />
            <Instructor code='MATH223' title='CALCULUS 2' instructor='SETH SARFO' phone='0246358267' office='CS92' hours='WEDNESDAYS' ></Instructor>
            
        </main><br /><hr />
        <Footer></Footer>
        

        </>
    );

    
}
export default Contact