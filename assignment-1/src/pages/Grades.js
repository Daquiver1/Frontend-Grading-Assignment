import { useState } from "react"
import { grades } from "../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function Grades(){
    
    let completeGrades = grades.filter((course)=> { return course.grade !== ''} )
    let incompleteGrades = grades.filter((course)=> { return course.grade === ''} )

    const [ filterResults, setFilterResults  ] = useState(completeGrades)

    function handleFilterChange(filter, value){
        switch (filter) {
            case 'year':
                if(value !== ''){
                    
                    const filtered = filterResults.filter((course)=> {return course.accYear === value})

                    console.log(filtered)
                    if (filtered.length === 0){
                        setFilterResults(completeGrades)
                    } else {
                        setFilterResults(filtered)
                     }
                } else{
                    setFilterResults(completeGrades)
                }
                break;
            case 'sem':
                if(value !== ''){
                    const filtered = filterResults.filter((course)=> {return course.semester == value})
                    
                    console.log(filtered)
                    if (filtered.length === 0 ){
                        setFilterResults(completeGrades)
                    } else {
                        setFilterResults(filtered)
                    }
                } else {
                    setFilterResults(completeGrades)
                }
                break;
            default:
                break;
        }
    }
    
    return(
        <>
            <Header />
            <main>
            <section>
                <h1 className="text-center text-ugBlue mb-4">My Grades</h1>
                <form className="flex flex-col-reverse gap-2 md:gap-0 md:flex-row-reverse items-center mb-4">
                    <button className="text-ugBlue hover:text-white bg-slate-300 hover:bg-ugBlue duration-150 h-[42px] rounded-full px-4 mr-4" onClick={(e)=>{e.preventDefault(); handleFilterChange('year', ''); handleFilterChange('sem', ''); document.getElementById('year-select').value = '';  document.getElementById('sem-select').value = ''}}>Reset</button>
                    <select id="sem-select" onChange={(e)=>{handleFilterChange('sem',e.target.value)}} className="text-ugBlue bg-slate-300 h-[42px] rounded-full px-2 mr-4">
                        <option value={''}>All Semesters</option>
                        <option value={1} >Semester 1</option>
                        <option value={2}>Semester 2</option>
                    </select>
                    <select id="year-select" onChange={(e)=>{handleFilterChange('year',e.target.value)}} className="text-ugBlue bg-slate-300 h-[42px] rounded-full px-2 mr-4">
                        <option value={''}>All Academic Years</option>
                        <option key={'2022/23'} value={'2022/23'}>2022/23</option>
                        <option key={'2023/24'} value={'2023/24'} >2023/24</option>
                    </select>
                    </form>
                <div className="rounded-2xl overflow-hidden border-2 border-lightUgBlue">
                    <div className="grid grid-cols-gradesMobile md:grid-cols-grades bg-ugBlue px-3 md:px-6 py-2 text-white font-bold">
                        <span>Course ID</span>
                        <span>Course Title</span>
                        <span className="hidden md:block">Semester/Year</span>
                        <span>Grade</span>
                    </div>
                    { 
                        filterResults && filterResults.map((course, idx)=>{
                            return(
                                <div key={idx} className="grid grid-cols-gradesMobile md:grid-cols-grades px-3 md:px-6 py-2 border-b-[1.5px] border-b-lightUgBlue last:border-0">
                                    <span>{course.id}</span>
                                    <span>{course.title}</span>
                                    <span className="hidden md:block">Sem {course.semester} - {course.accYear}</span>
                                    <span>{course.grade}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className="text-center text-ugBlue mb-4 mt-8">Missing Grades</h2>
                <div className="rounded-2xl overflow-hidden border-2 border-lightUgBlue">
                    <div className="grid grid-cols-gradesMobile md:grid-cols-grades bg-ugBlue px-3 md:px-6 py-2 text-white font-bold">
                        <span>Course ID</span>
                        <span>Course Title</span>
                        <span className="hidden md:inline">Semester/Year</span>
                        <span>Grade</span>
                    </div>
                    { 
                        incompleteGrades &&  incompleteGrades.map((course, idx)=>{
                            return(
                                <div key={idx} className="grid grid-cols-gradesMobile md:grid-cols-grades px-3 md:px-6 py-2 border-b-[1.5px] border-b-lightUgBlue last:border-0">
                                    <span>{course.id}</span>
                                    <span>{course.title}</span>
                                    <span className="hidden md:inline" >Sem {course.semester} - {course.accYear}</span>
                                    <span className=""><FontAwesomeIcon icon={faTriangleExclamation}/></span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            </main>
            <Footer />
        </>
    )
}