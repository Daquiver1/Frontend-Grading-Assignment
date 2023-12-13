import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai"


const Support = () => {
  const [open, setOpen]= useState(true);
  const [isOpen1, setIsOpen1]= useState(false);
  const [isOpen2, setIsOpen2]= useState(false);
  const [isOpen3, setIsOpen3]= useState(false);
  const [isOpen4, setIsOpen4]= useState(false);
  const [isOpen5, setIsOpen5]= useState(false);
  const [isOpen6, setIsOpen6]= useState(false);
  const [isOpen7, setIsOpen7]= useState(false)

  const Menus =[
    {title: "Dashboard",src: "Chart_fill", path:"/dashboard"},
    {title: "Missing Grade Form", src: "Search", path: "/search"},
    {title: "Grade Report", src: "Chart", path:"/Report"},
    {title: "Instructor Contact", src: "Folder", gap: true, path:"/Contact"},
    {title: "Help and Support", src: "Chat", path:"/Support"},
  ]
  const handleMenuClick = (title) => {
    setOpen(!open);
  };
  const [formData, setFormData] = useState({
    name1: "",
    emailAddress: "",
    instructorName: "",
    instructorEmail: "",
    message: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Handling form submission");
    alert(`Simulating email sending: ${formData.message}`, formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const list =[{
    first: "Download Procedure file here!",
    second: "Click here to make secure online payment!",
    third: "Download UG mobile and click link to get the procedure!",
    fourth: "Click here to see procedure on how to connect wifi!",
    fifth: "Download pdf on how to reset MIS Web password",
    sixth: "Click link here to get access to how to defer your course of study",
    seventh: "Yes! Click here to check how."
  }]
  

  return (
    <div className="flex overflow-hidden">
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
          <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap? "mt-18" : "mt-12"}`}>
            <Link to={menu.path} onClick={() => handleMenuClick(menu.title)}>
              <img src={require(`../assets/${menu.src}.png`)} onClick={() => handleMenuClick(menu.title)}/>
            </Link>
            <Link to={menu.path} onClick={() => handleMenuClick(menu.title)}>
              <span className={`${!open && 'hidden'} origin-left duration-200 text-2xl`} onClick={() => handleMenuClick(menu.title)} >{menu.title}</span>
            </Link>
          </li>)}
      </ul>
    </div>
    <div className="p-7 text-2x1 font-semibold flex-1 h-screen bg-[#ece3e9]">
      <div>
      <div className=" bg-cyan-700 p-15 mb-15 rounded-md shadow-md mb-[30px] text-4xl pl-[700px] text-white">
      <div className="">
        <h2>Help and FAQs</h2>
      </div>
      </div>
      </div>
    <div>
      <section className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl" onClick={()=>setIsOpen1((prev) => !prev)}>
        <p class="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl">
          How do I Register and Pay for my Re-sit
          {!isOpen1?(<AiOutlineCaretUp className='h-8'/>):(<AiOutlineCaretDown className='h-8'/>)}
        </p>
        {isOpen1 &&(<div className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl">
          {list.map((item)=>(<div>
            <h3>{item.first}</h3>
          </div>))}</div>)}
        </section>

      <section className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl" onClick={()=>setIsOpen2((prev) => !prev)}>
        <p>Can I pay for School Fees Online
        {!isOpen2?(<AiOutlineCaretUp className='h-8'/>):(<AiOutlineCaretDown className='h-8'/>)}
        </p>
        {isOpen2 &&(<div className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl">
          {list.map((item)=>(<div>
            <h3>{item.second}</h3>
          </div>))}</div>)}
      </section>
      <section className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl" onClick={()=>setIsOpen3((prev) => !prev)}>
        <p>Can I view my Registered Courses and Exams Results on UGMobile
        {!isOpen3?(<AiOutlineCaretUp className='h-8'/>):(<AiOutlineCaretDown className='h-8'/>)}
        </p>
        {isOpen3 &&(<div className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl">
          {list.map((item)=>(<div>
            <h3>{item.third}</h3>
          </div>))}</div>)}
      </section>

      <section className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl" onClick={()=>setIsOpen4((prev) => !prev)}>
        <p>How Can I connect my device to the University WIFI
        {!isOpen4?(<AiOutlineCaretUp className='h-8'/>):(<AiOutlineCaretDown className='h-8'/>)}
        </p>
        {isOpen4 &&(<div className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl">
          {list.map((item)=>(<div>
            <h3>{item.fourth}</h3>
          </div>))}</div>)}
      </section>
      <section className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl" onClick={()=>setIsOpen5((prev) => !prev)}>
        <p>How do I reset MIS Web Password
        {!isOpen5?(<AiOutlineCaretUp className='h-8'/>):(<AiOutlineCaretDown className='h-8'/>)}
        </p>
        {isOpen5 &&(<div className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl">
          {list.map((item)=>(<div>
            <h3>{item.fifth}</h3>
          </div>))}</div>)}
      </section>

      <section className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl" onClick={()=>setIsOpen6((prev) => !prev)}>
        <p>How do I defer my course of study or programme
        {!isOpen6?(<AiOutlineCaretUp className='h-8'/>):(<AiOutlineCaretDown className='h-8'/>)}
        </p>
        {isOpen6 &&(<div className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl">
          {list.map((item)=>(<div>
            <h3>{item.sixth}</h3>
          </div>))}</div>)}
      </section>
      <section className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl" onClick={()=>setIsOpen7((prev) => !prev)}>
        <p>Can I change my programme in the course of my study
        {!isOpen7?(<AiOutlineCaretUp className='h-8'/>):(<AiOutlineCaretDown className='h-8'/>)}
        </p>
        {isOpen7 &&(<div className="bg-gray-200 p-15 mb-15 rounded-md shadow-md mb-[30px] text-1xl">
          {list.map((item)=>(<div>
            <h3>{item.seventh}</h3>
          </div>))}</div>)}
      </section>

      <div className="antialiased">
        <div className="flex w-full min-h-screen justify-center items-center pb-[900px]">
          <div className="flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-14 rounded-xl shadow-lg text-white">
            <div className="flex flex-col justify-between"> 
              <div>
                <h1 className='font-bold text-4xl tracking-wide'>Contact Technical Support</h1>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 pt-0">
                <form action="" className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label for="" className="text-sm">Name</label>
                    <input type="text" value={formData.name1}  name="name" onChange={handleInputChange} placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                  </div>
                  <div>
                    <label for="" className="text-sm">Message</label>
                    <input type="text" value={formData.instructorName} name="instructorName" onChange={handleInputChange} placeholder="To technical support..." className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                  </div>
                  <button type="submit" class="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase test-sm">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
  )
}

export default Support
