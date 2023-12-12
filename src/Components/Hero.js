import React from 'react'

const Hero = () => {
  return (
    <div>
          <div className='flex justify-center items-center p-[5rem] gap-[2rem] bg-indigo-200'> 
     <div className='text-center p-6 rounded-md bg-slate-200'>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


     </div>

     <div>
       <img src={require('./R.png')} alt='Rafika' className='w-[90%] max-w-none h-auto rounded-md'/>

     </div>

      
    </div>




        


    </div>
  )
}

export default Hero