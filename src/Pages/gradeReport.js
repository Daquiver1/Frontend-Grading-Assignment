import Header from "../Components/header"
import Footer from "../Components/footer";

export default function GradeReport() {
    return(
        <>
        <Header/>
        <h1>GradeReport</h1>
        

        <div class="sidebar">
            <h2>Sidebar</h2>
            <p>Links, content, or navigation here</p>
        </div>

        <div class="content">
            <h1>Your Page Content</h1>
            <p>Scroll down to see the fixed sidebar in action while the content moves.</p>
        </div>
        <Footer/>
        </>
    );    
}