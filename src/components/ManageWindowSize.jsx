import {useState, useEffect} from 'react'

function ManageWindowSize() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth)
      console.log(width)
    }
    
    window.addEventListener("resize", watchWidth)
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default ManageWindowSize
