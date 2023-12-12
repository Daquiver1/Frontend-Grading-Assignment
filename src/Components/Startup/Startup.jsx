import './Startup.css'
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'
import { startupdata } from '../../Data/Data'
import { SiParitysubstrate } from "react-icons/si";

export default function Startup() {
  return (
    <section className='Startup'>
        <div className="container stratup-container">
            <div className="title-aria">
           <TitileTypeOne TitleTop={'Our Mission'} Title={'Empowering Students for a Bright Future'} />
<p className='start-up-des'>At the University of Ghana, our mission is to provide quality education and empower students to excel in their academic journey. Welcome to the Missing Grade Reporting System, an advanced web platform designed to empower students in managing their academic grades effectively. With a responsive design and intuitive navigation, this 7-page website aims to enhance user experience while promoting transparent communication between students, instructors, and academic administration.</p>

            </div>

            <div className="startup-article-aira">
                {
                    startupdata.map(({title, des}, index)=>{
                        return(
                            <article key={index}>
                                <span><SiParitysubstrate /></span>
                                <h3>{title}</h3>
                                <p>{des}</p>                                
                            </article>   
                        )
                    })
                }                             
            </div>
        </div>
    </section>
  )
}
