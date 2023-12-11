import React from 'react'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <div>
      <div>slider</div>
      <div>header</div>
      <div>{<Outlet/>}</div>
    </div>
  )
}
