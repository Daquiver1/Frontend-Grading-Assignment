import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { FaWhatsappSquare,FaTwitter,FaLinkedin, FaInstagramSquare} from "react-icons/fa"


const Contact = () => {
  const [open, setOpen]= useState(true);
  const [selectedPage, setSelectedPage] = useState('Home page')
  const [formData, setFormData] = useState({
    name1: "",
    emailAddress: "",
    instructorName: "",
    instructorEmail: "",
    message: "",
  });
  const Menus =[
    {title: "Dashboard",src: "Chart_fill", path:"/dashboard"},
    {title: "Missing Grade Form", src: "Search", path: "/search"},
    {title: "Grade Report", src: "Chart", path:"/Report"},
    {title: "Instructor Contact", src: "Folder", gap: true, path:"/Contact"},
    {title: "Help and Support", src: "Chat", path:"/Support"},
  ]

  const instructors = [
    { id: 1, name1: 'Dr. Asare Tuah', email: 'Asare123@gmail.com' },
    { id: 2, name1: 'Dr. Keneth Dzadzie', email: 'keneth142@gmail.com' },
    { id: 2, name1: 'Dr. Collins James', email: 'Collins153@gmail.com' },
    { id: 2, name1: 'Dr. Abdullai Aziz Dwumfuor', email: 'Aziz176@gmail.com' },
    { id: 2, name1: 'Dr. Paul Armah', email: 'Paul148@gmail.com' },
  ];
  const handleMenuClick = (title) => {
    setOpen(!open);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Handling form submission");
    alert(`Simulating email sending: ${formData.message}`, formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  

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
      <div className="antialiased">
          <div className="flex w-full min-h-screen justify-center items-center">
            <div className="flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-14 rounded-xl shadow-lg text-white">
              <div className="flex flex-col justify-between"> 
                <div>
                  <h1 className='font-bold text-4xl tracking-wide'>Contact Your Instructors</h1>
                  <p className='pt-2 text-cyan-100'>Please contact your instructors for assistance, providing them with details about your specific inquiry or concern to ensure a prompt and accurate response</p>
                </div>
                <div>
                  <div className="text-1xl pt-[20px]">
                      <h2>Instructors</h2>
                      <ul>
                        {instructors.map((instructor) => (
                          <li key={instructor.id}>
                            {instructor.name1} - {instructor.email}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="flex space-x-4 text-lg" >
                  <FaWhatsappSquare/>
                  <FaTwitter />
                  <FaLinkedin />
                  <FaInstagramSquare />
                </div>
              </div>
              <div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 pt-0">
                  <form action="" className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
                    <div>
                      <label for="" className="text-sm">Your name</label>
                      <input type="text" value={formData.name1}  name="name" onChange={handleInputChange} placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                    </div>
                    <div>
                      <label for="" className="text-sm">Email Address</label>
                      <input type="email" value={formData.emailAddress}  name="emailAddress" onChange={handleInputChange} placeholder="Email Address" className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                    </div>
                    <div>
                      <label for="" className="text-sm">Instructor name</label>
                      <input type="text" value={formData.instructorName} name="instructorName" onChange={handleInputChange} placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                    </div>
                    <div>
                      <label for="" className="text-sm">Instructor Email Address</label>
                      <input type="email"  value={formData.instructorEmail} name="instructorEmail" onChange={handleInputChange} placeholder="Email Address" className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                    </div>
                    <div>
                      <label for="" className="text-sm">Message</label>
                      <textarea type="Message"  value={formData.message}  name="message" onChange={handleInputChange} rows="4" placeholder="Message" className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"></textarea>
                    </div>
                    <button type="submit" class="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase test-sm">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact
