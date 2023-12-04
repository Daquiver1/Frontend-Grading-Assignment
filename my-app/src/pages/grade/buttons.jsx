import React from 'react'
import Data from './data'

function Buttons({menuItems, filterItems, setItems}) {
  return (
    <div className='button-container'>
        {
            menuItems.map(val => (
                <button className='year-button' onClick={() => filterItems(val)}>
                    {val}
                </button>
            ))
        }
        <button className='year-button' onClick={() => setItems(Data)}>
        All
        </button>
    </div>
  )
}

export default Buttons