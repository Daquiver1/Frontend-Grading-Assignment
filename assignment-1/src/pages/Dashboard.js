import Header from '../components/Header'
import Footer from '../components/Footer'
import { grades } from '../data'
import { Link } from 'react-router-dom' 

const incompleteGrades = grades.filter((course)=> { return course.grade === ''} )

export default function Dashboard(){
    return(
        <>
            <Header />
            <main>
                <section>
                    <h1 className='text-center text-ugBlue mb-4'>Dashboard</h1>
                    <div className='bg-slate-200 rounded-2xl p-4 md:p-8 w-[90%] md:w-[80%] m-auto'>
                        <div className=' flex flex-col md:flex-row gap-4 md:gap-10 mb-4 md:mb-8'>
                            <span className='bg-ugBlue flex gap-10 items-center p-8 md:p-8 w-full md:w-1/2 text-white rounded-2xl'>
                                <h1 className='text-5xl md:text-6xl'>{grades.length.toString()}</h1>
                                <h2 className='leading-10'>Total Courses recorded</h2>
                            </span>
                            <span className='bg-white p-8 w-full md:w-1/2  flex gap-10 items-center rounded-2xl'>
                                <h1 className='text-5xl md:text-6xl'>{incompleteGrades.length.toString()}</h1>
                                <h2 className='leading-10' >Grades Missing</h2>
                            </span>
                        </div>
                        <h2 className='mb-4'>Recent Grades</h2>
                        <div className='bg-white flex flex-col gap-4 rounded-2xl w-full p-4 mb-4'>
                            {
                                grades.slice(0, 5).map((course, idx)=>{
                                    return (
                                        <div key={idx} className='bg-slate-200 rounded-lg p-4 flex justify-between'>
                                            <h3>{course.title}</h3>
                                            <h3>{course.grade}</h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full flex justify-center m-auto'>
                            <Link to='/grades'><button className='primary-button m-auto duration-150'>View All</button></Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}