import React from 'react'

//This is a basic button component called upon in the home page

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-1xl text-white px-3.5 py-1.5 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button