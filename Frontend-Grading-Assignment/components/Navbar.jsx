import '../src/index.css'
import { useState } from 'react';

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "howItWorks",
    title: "How It Works",
  },
];



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <header className='bg-slate-500 text-white p-3 flex justify-between fixed w-full'>
      <h1>GradeBook</h1>
      <nav>
        <div className='sm:hidden'>
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? <p className='text-lg cursor-pointer'>&#120;</p> : <p className='cursor-pointer'>&#9776;</p>}
          </div>
          <ul className={`absolute left-0 bg-slate-500 w-full px-3 py-1 ${toggle ? 'block' : 'hidden'}`}>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`block hover:bg-slate-400 rounded px-1 ${active === 'nav.title'?'text-white': 'text-dimWhite'} ${index === navLinks.length - 1 ? 'mb-0': 'mb-4'}`} onClick = {() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul> 
        </div>
        <div>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-slate-200"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
          ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar