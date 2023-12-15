import { useState } from 'react'

import './App.css'
import GradeReport from './Component/GradeReport'
import Navigation from './Component/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div><Navigation /></div>
  )
}

export default App
