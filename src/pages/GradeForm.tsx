import { Button, TextField } from '@mui/material'
import Layout from '../layouts/Layout'

const GradeForm = () => {
  const handleFormSubmit = () => {
    alert('Form submitted')
  }
  return (
    <Layout>
      <h1 className='text-2xl font-bold pt-8 px-32'>Missing Grade Report Form</h1>
      <p className={`
        text-gray-600
        text-lg
        px-32
        pb-8
      
      `}>
        Please fill out the form below to report a missing grade. Please note that the grade will be considered missing if it is not available on the portal after 48 hours of the official release of results.
      </p>
      <div className='flex flex-col gap-y-4 min-h-[700px] px-32'>
      <TextField id="course-name" label="Course Name" variant="outlined" />
      <TextField id="instructor-name" label="Instructor Name" variant="outlined" />
      <TextField id="expected-grade" label="Expected Grade" variant="outlined" />
      <TextField id="reason" label="Reason" variant="outlined" multiline rows={5}/>

      <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
      </div>
    </Layout>
  )
}

export default GradeForm