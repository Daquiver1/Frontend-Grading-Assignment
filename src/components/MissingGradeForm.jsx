import { useState, useEffect } from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import Typed from 'react-typed'


function MissingGradeForm() {

  
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth)
      console.log(width)
    }

    window.addEventListener("resize", watchWidth)
  }, [])

  function Above1000() {
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


    const images = [img1, img2, img3]
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
      const intervalId = setInterval(nextSlide, 10000); // Change slide every 3 seconds

      return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [currentIndex]);




    return (
      <div className='grid gap-x-[30px] p-10 grid-cols-2 grid-rows-2 text-purple-800 '>
        <div className="relative  ">
          <img
            className="w-full h-[500px] object-cover rounded-xl opacity-[0.8] relative rotate-[360deg] duration-500"
            src={images[currentIndex]}
            alt={`img ${currentIndex + 1}`}
          />
          <Typed
            className='text-3xl font-bold md:pl-4 pl-2 absolute top-1/4 '
            strings={['If a student believes there is an error in the grading of a specific assignment or exam.', 'If an exam was taken, but the grade has not been recorded., a student may submit a missing grade report to seek information on when the grades will be available.', 'Enter Expected Grade', 'Sometimes, an instructor might not have submitted grades for a specific assignment or exam., leading to an incomplete grade for the course.', 'The missing grade report serves as a formalized communication channel between students and instructors.',]}
            typeSpeed={80} backSpeed={20}
            loop
          />
        </div>

        <div className='mr-3 text-white'>
          <form action="" className='grid' onSubmit={handleSubmit}>
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
      <div className='p-10  h-[580px]'>
        <div className='mr-3 text-white'>
          <form action="" className='grid' onSubmit={handleSubmit}>
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


  return (
    <>
      {window.innerWidth > 1000 ? <Above1000 /> : <Below1000 />}
    </>
  )
}

export default MissingGradeForm
