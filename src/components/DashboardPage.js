import React from 'react'
import Example from './sidebar';

const DashboardPage = () => {
  return (
    <div>
      <Example/>
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
            <h1>Hello World</h1>{/* Your content */}
        </div>
      </main> 
    </div>
    
  )
}

export default DashboardPage;