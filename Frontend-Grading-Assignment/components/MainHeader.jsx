import { useState } from "react"


const MainHeader = () => {
  const[active, setActive] = useState('false')
  return (
    <div className="bg-slate-500 p-4 text-slate-200 text-lg flex justify-between">
        <p></p>        
        <div className="flex cursor-pointer">
            <div className="px-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-slate-400" onClick={() => setActive(!active)}>
                  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
              </svg>
              <div className={`p-2 mr-2 border-2 border-slate-500 rounded bg-slate-400 ${active ? 'block' : 'hidden'} absolute w-[250px] right-10`}>
                <div>
                  <p className="text-sm">Grades for <span className="text-red-500">STAT223</span> not found</p>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p>Name</p>
        </div>
    </div>
  )
}

export default MainHeader