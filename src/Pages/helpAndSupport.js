import Footer from "../Components/footer";
import Header from "../Components/header"

export default function HelpAndSupport() {
    return(
        <>
        <Header/>
       
<span class="toggle-btn" onclick="toggleNav()">&#9776;</span>


<div id="mySidenav" class="sidenav">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</div>


<div class="main" id="main">
  <h2>Main Content</h2>
  <p>This is the main content area.</p>
</div>
        <Footer/>
        </>
    ) ;   
}