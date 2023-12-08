import './Help.css'
import img4 from './images/grade.svg'
import img6 from './images/Straight-As.jpg'
import img7 from './images/grade2.webp'
import img8  from './images/calender.webp'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.css'
function Help(){
    return(<>
    <div className='Help-desk'>
    <div className='form-search'>
    <p className='title'>Welcome! How may we help you?</p>
    <input className='help-input' placeholder='Search'></input>
    <div className="d-flex justify-content-around">
    <img className="pics" title="login" src={img4}></img>
 <img className="pics" title="grade report" src={img6}></img>
 <img className="pics" title="our calendar" src={img8}></img>
    <img className="pics" title="progress" src={img7}></img>
    
    </div>
    </div>
    </div>
    <Footer/>
    </>)

}
export default Help;