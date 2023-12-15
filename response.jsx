import React from 'react'
import { Link } from 'react-router-dom'

function response() {
  return (
    <div>Your response has been recorded. We will get back to you soon.
    <Link to= '/Dashboard'>Click here to go back.</Link>
    </div>

  )
}

export default response
