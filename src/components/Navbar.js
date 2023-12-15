import React from 'react'


function Navbar() {
  return (
    <nav className='w-full h-16 left-0 z-30 flex justify-between items-center px-10 lg:px-36 py-2'>
        <div className="w-32 h-full relative">
            Ug Report
        </div>
        <div className="flex justify-end items-center gap-2">
            <button>
            <a href='/landing' className='text-blue-700 hover:text-red-500' >Home</a> 
            </button>
            <button>
                <a href='/dashboard' className='text-blue-700 hover:text-red-500' >Dashboard</a>
            </button>
            <button >
                <a href='/login' className='text-blue-700 hover:text-red-500' >Login</a>
            </button>
            <button>
            <a href='/missing' className='text-blue-700 hover:text-red-500 '> Missing Grade </a>
            </button>
            <button>
            <a href='/help'className='text-blue-700 hover:text-red-500' > Help</a>
                </button>
                <button>
            <a href='/instructors' className='text-blue-700 hover:text-red-500'> Instructors</a>
                </button>
            
            
            

        </div>
    </nav>
  )
}

export default Navbar


