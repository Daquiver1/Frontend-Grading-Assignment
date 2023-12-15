import {Details} from './instructorDetails'

const InstructorContact = () => {
  return (
    <div className='text-slate-500 m-4 p-2 mx-auto min-w-[450px] max-w-[600px] border-2 border-slate-500 rounded'>
      <p className='text-lg font-semibold text-center'>Click on email to send instructor and email</p>
      <ul>
        <li className='grid grid-cols-2'>
          <p>Name</p>
          <p>Email</p>
        </li>
        {Details.map((detail) =>(
          <li key={detail.name} className='grid grid-cols-2'>
            <p>{detail.name}</p>
            <a href={`mailto:${detail.email}`} className='text-blue-500 hover:text-slate-500'>{detail.email}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InstructorContact