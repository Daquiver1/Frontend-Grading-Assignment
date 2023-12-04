import React from 'react'

function Card({item}) {
  return (
    <div className='container'>
        <div className="row">
            <table>
                <tr>
                    <td colSpan={8}>COURSE CODE</td>
                    <td colSpan={8}>COURSE TITLE</td>
                    <td colSpan={8}>GRADE</td>
                </tr>
            </table>
            {item.map((val) => (
                <table key={val.semester} className='semester'>
                    
                    
                        <tr>
                            <td colSpan={2}>{val.course}</td>
                            <td colSpan={8}>{val.title}</td>
                            <td colSpan={1}>{val.grade}</td>
                        </tr>
                 
                    
    
                </table> 
            ))}
        </div>
    </div>
  )
}

export default Card