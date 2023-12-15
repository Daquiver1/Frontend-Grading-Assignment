import React from 'react'
import { Link } from 'react-router-dom'

export default function Signupbtn() {
  return (
    <div className='h-60 flex items-center justify-center'>
         <Link to={"/sign-in"}
        type="button"
        className="animate animate-bounce rounded-full bg-indigo-600 px-6 py-4 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in here
      </Link>
    </div>
  )
}
