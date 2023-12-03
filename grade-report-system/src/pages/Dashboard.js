import React,{useState} from 'react';



const Dashboard = () => {
  const [open, setOpen]= useState(true);
  const [selectedPage, setSelectedPage] = useState('Home page')
  const Menus =[
    {title: "Dashboard",src: "Chart_fill"},
    {title: "Help and Support", src: "Chat"},
    {title: "Accounts", src: "User", gap: true},
    {title: "Schedule", src: "Calendar"},
    {title: "Search", src: "Search"},
    {title: "Grade Report", src: "Chart"},
    {title: "Instructor Contact", src: "Folder", gap: true},
    {title: "Setting", src: "Setting"},
  ]
  const handleMenuClick = (title) => {
    setSelectedPage(title); 
  };
  return (
    <div className="flex">
      <div className={`${open? "w-72" :"w-20"} duration-300 h-screen bg-[#000435] relative`}>
        <img src={require("../assets/control.png")} 
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-[#000435] ${!open && "rotate-180"}`}
        onClick={()=> setOpen(!open)}
        />
        <div>
            <img src={require("../assets/uglogo.png")} className= {`cursor-poiter duration-500`} />
            <h1 className={`text-white mt-[-50px] ml-[85px] font-medium text-xl duration-300 ${!open && 'hidden'}`}>UG|Ghana</h1>
        </div>
        <ul>
            {Menus.map((menu,index)=>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap? "mt-9" : "mt-2"}`}>
                <img src={require(`../assets/${menu.src}.png`)} onClick={() => handleMenuClick(menu.title)}/>
                <span className={`${!open && 'hidden'} origin-left duration-200`} onClick={() => handleMenuClick(menu.title)} >{menu.title}</span>
              </li>)}
        </ul>
      </div>
      <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
        <h1>{selectedPage}</h1>
      </div>
    </div>
  )
}

export default Dashboard
