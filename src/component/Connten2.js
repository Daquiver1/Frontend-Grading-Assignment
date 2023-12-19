import React from 'react'

const Connten2 = () => {
  return (
    <div className='mt-[5rem]'>
        <div className='flex justify-center items-start h-screen mt-11'>
            <div className='bg-white shadow-md rounded-lg p-4 ' >
                <h1 className='text-center text-[2rem] font m-5 font-bold'>Profile</h1>
                <div className='flex justify-center items-center '>
                <img src={require("./mugshot.jpg")} alt="" className=' w-70 h-60 mb-4  rounded-3xl'/>

                </div>

                    <div className='m-5  border-b border-slate-200 '>
                    <p className='p-2'>Name: ALLOTEY, IAN GERALD KPAKPO</p>
                    <p className='p-2'>Level: 200 </p>
                    <p className='p-2'>Gender: Male </p>
                    <p className='p-2'>Student ID:  10982211</p>
                    <p className='p-2'>Year: 2026</p>
                    </div>
                   
                    <div className='m-5 border-b border-slate-200 '>
                    <p className='p-2'>Address: East Legon </p>
                    <p className='p-2' > E-mail: iantakpo4536@gmail.com</p>
                    <p className='p-2'>University of Ghana</p>
                   
                    </div>


                    <div className='m-5 '>
                    <p className='p-2'>Programme: Bachelor of Scince(BSc.) in Information Technology</p>
                    <p className='p-2'>Hall: Jean Nelson Akah Hall</p>
                    <p className='p-2'>Nationality: Ghanaian</p>
                    
                 
                    <p></p>
                    <p></p>

                    </div>
                  
                    

                


            </div>
           
            
            
         
        </div>

    </div>
  )
}

export default Connten2