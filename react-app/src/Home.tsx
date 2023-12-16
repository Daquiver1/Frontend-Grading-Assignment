import './Home.css'
import area from './images/area.jpg'
import Footer from './component/Footer';

function Home () {
    return(
        <>
        <h1 className='welcome'>Welcome</h1>

<h2 className='title'>Missing Grade Report System.</h2>

 <img className='pic1' src={area} alt='' /> 

 <ul className='para'>
    <p className='trav'>This system helps you track and manage missing grades for your courses. Here's what you need to know:</p>
<li > Begin by logging into the missing grade report system with your Student ID and password.</li>
<li>From the navbar choose Login.</li>
<li>After filling in your details, Submit.</li>
<li>The Grade Report screen appears.</li>
<li>Check for missing grade.</li>
<li> Report your missing grade.</li>
<p className='trav'>If you need further assistance, contact us we will be ready to help you always. <br>
</br>Thank you for using the Missing Grade Report System. Take action to address missing grades promptly for a successful academic experience!</p>

</ul>

<Footer/>
        </>
    )
}

export default Home;