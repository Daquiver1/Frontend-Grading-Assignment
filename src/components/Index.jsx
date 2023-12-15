import { useState , useEffect} from 'react';
import Navbar from './Navbar';
import { MdCastForEducation } from "react-icons/md";
import Sidebar from './Sidebar';
import img1 from '../assets/img1.jpg'
import HelpAndSupport from './HelpAndSupport';

function Index() {
  const [width, setWidth] = useState(window.innerWidth)


  function Below1000(){
    const [formData, setFormData] = useState({
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanationField: ''
    })

    function handleChange(event) {
      const { name, value } = event.target
      setFormData(preFormData => {
        return {
          ...preFormData,
          [name]: value
        }
      })
    }

    function handleSubmit(event) {
      event.preventDefault()
      console.log(formData)
    }

    return (
      <div className=''>
        <div className='relative mx-2'>
            <img src={img1} alt="img1 " className='h-[100px] w-[100%] object-cover opacity-[0.8]  rounded-t-lg mt-1' />
            <h1 className='absolute bottom-1/3 text-[30px] font-extrabold text-dark-purple left-1/4'>Missing Grade Form</h1>
          </div>
          
        <div className='mx-2 pt-10 text-white bg-gradient-to-r from-sky-500 to-indigo-500'>
          <form action="" className='grid px-10 ' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Course Name'
              className='mb-3 self-center p-3 rounded pr-[140px] bg-dark-purple placeholder-white'
              name='courseName'
              value={formData.courseName}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder='Instructor Name'
              className='mb-3 self-center p-3 rounded pr-[140px] bg-dark-purple placeholder-white'
              name='instructorName'
              value={formData.instructorName}
              onChange={handleChange}
            />

            <select
              className='mb-2 self-center py-3 pr-[130px] rounded bg-dark-purple '
              name="expectedGrade"
              id="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
            >
              <option value="" >--Select Expected Grade--</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>

            <textarea
              className='mb-4 self-center p-3 rounded pr-40 text-white max-h-[250px] h-[250px] bg-dark-purple placeholder-white'
              name='explanationField'
              value={formData.explanationField}
              placeholder='Explanation Field'
              onChange={handleChange}
            />


            <button className='bg-dark-purple text-white text-black self-center px-[144px] py-3 rounded'>
              Submit
            </button>
          </form>
        </div>
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
      {window.innerWidth < 750 ? <div> <Navbar/>  <HelpAndSupport /> </div> : 
      <nav className='w-full items-center flex text-3xl font-bold text-[#00df94]  top-0 h-[60px] fixed left-0 right-0  z-20 justify-end pr-[5%] py-[20px] bg-[white] '>
        <h1 className='flex'>
          <MdCastForEducation className='mr-3 flex self-center' />Grade Report Form
        </h1>
      </nav> }

      {window.innerWidth > 750 && <Sidebar/>}
      
    </div>
  )
}

export default Index
