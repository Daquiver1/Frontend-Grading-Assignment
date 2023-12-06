import'./Home.css'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './component/Footer';
import img1 from './images/uglolo.jpg'
import img2 from './images/group.webp'



function Home(){
    return(
        <>
            
        <div className='body'>
        <div className='topic-paragraph'> <h1>Welcome</h1></div>
       
       <img  className='logo' src ={img1} alt=''  />

            <div>
     <h2>Missing Grade reporting system</h2>
     </div>
       <div className='image-content'>
       <img title='students' data-mdb-animation='fade-out' className='students' src={img2}></img>
       <div className='paragraph'>
       <p className='content'> Introducing our revolutionary Missing Grade Reporting System, a game-changer in the realm of education technology! No more lost grades or cumbersome tracking—imagine a seamless process where missing grades are identified and addressed with unprecedented efficiency.<br></br> 
       Our system empowers educators to effortlessly track and manage grades, ensuring a transparent and accountable grading process. Picture real-time alerts that notify instructors of any discrepancies, allowing for timely interventions and fostering a collaborative learning environment. With customizable reporting options, administrators gain insights that go beyond the numbers, providing a holistic view of student performance.<br></br>
        Join us in revolutionizing the way grades are managed and reported—a future where the stress of missing grades becomes a thing of the past, and the focus shifts back to what truly matters: cultivating a thriving educational experience for both educators and students alike. Welcome to a new era of grade management excellence!
       </p>
       </div>
       </div>
       <div><Footer /></div>
       </div>
        </>
    )
}
export default Home;