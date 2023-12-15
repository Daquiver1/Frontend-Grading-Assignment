import { useState , useEffect} from 'react';
import Navbar from './Navbar';
import MissingGradeForm from './MissingGradeForm';
import { MdCastForEducation } from "react-icons/md";

function Index() {
  const [width, setWidth] = useState(window.innerWidth)
  function SideBar(){
    return (
      <div className='fixed left-0 top-[61px] w-[300px] border-r h-[600px] bg-transparent text-white ease-in-out duration-500 border'>
        <ul className='uppercase '>
          <li className='p-4 border-b border-gray-600'>Dashboard</li>
          <li className='p-4 border-b border-gray-600'>Grade Report</li>
          <li className='p-4 border-b border-gray-600'>Missing Grade Form</li>
          <li className='p-4 border-b border-gray-600'>Instructor Contact Page</li>
          <li className='p-4 '>Help and Support Page</li>
        </ul>
      </div>
    )
  }

  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth)
      console.log(width)
    }
    
    window.addEventListener("resize", watchWidth)
  }, [])

  return (
    <div>
      {window.innerWidth < 1000 ? <Navbar/> : 
      <nav className='w-full items-center flex text-3xl font-bold text-[#00df94]  top-0 h-[60px] fixed left-0 right-0  z-20 justify-end pr-[5%] py-[20px] bg-[white] '>
        <h1 className='flex'>
          <MdCastForEducation className='mr-3 flex self-center' />Grade Report Form
        </h1>
      </nav> }
      <MissingGradeForm />

      {window.innerWidth > 1000 && <SideBar/>}
    </div>
  )
}

export default Index
