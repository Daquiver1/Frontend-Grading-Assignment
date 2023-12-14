import {useState,useEffect} from 'react'


function MissingGradeForm() {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanationField: ''
  })
  const [width, setWidth] = useState(window.innerWidth)

  function handleChange(event){
    const {name, value} = event.target
    setFormData(preFormData => {
      return {
        ...preFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
  }

  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth)
      console.log(width)
    }
    
    window.addEventListener("resize", watchWidth)
  }, [])

  function Above1000(){
    return (
      <div  className='flex justify-center ml-[300px] pt-10'>
        <form action="" className='flex bg-[#2c303a] min-h-[600px] p-20 mt-[43px] pb-[10%] w-[100%] justify-center align-center flex-col pt-10' onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Course Name'
            className='mb-3 self-center p-3 rounded pr-[140px]'
            name='courseName'
            value={formData.courseName}
            onChange={handleChange}
          />
  
          <input 
            type="text" 
            placeholder='Instructor Name'
            className='mb-3 self-center p-3 rounded pr-[140px]'
            name='instructorName'
            value={formData.instructorName} 
            onChange={handleChange}
          />
  
          <select 
            className='mb-2 self-center py-3 pr-[130px] rounded' 
            name="expectedGrade"
            id="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleChange}
          >
            <option value="">--Select Expected Grade--</option>
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
            className='mb-4 self-center p-3 rounded pr-40 text-black' 
            name='explanationField'
            value={formData.explanationField}
            placeholder='Explanation Field'
            onChange={handleChange}
          />
            
  
          <button className='bg-white text-black self-center px-[144px] py-3 rounded'>
            Submit
          </button>
        </form>
      </div>
    )
  }

  return (
    <>
      {window.innerWidth > 1000 && <Above1000 />}
    </>
  )
}

export default MissingGradeForm
