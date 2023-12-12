import FAQ from "./FAQ";
import Header from "./Header";
import Footer from "./Footer";
import Support from "./Support";
function Help(){
    return(
        <>
        <Header></Header>
        
        <div className="welcome-message"><h1>Help and Support</h1></div>
        <FAQ></FAQ>
        <Support></Support>
        <Footer></Footer>
        </>
    );



}
export default Help;