import { useState } from "react"
import Navbar from "./Navbar";

const FAQ = [
    {
        title:"What is the Missing Grade Reporting System?",
        content:"It is a system that allows you to view your grades and to communicate with instructor",
        index:1,
    },
    {
        title:"How can I access the system?",
        content:"You need to have an account to access the system",
        index:2,
    },
    {
        title:"What information can I view on the system?",
        content:"You can view your grades",
        index:3,
    },
    {
        title:"How do I report a missing grade?",
        content:"You will need to fill a form to report a missing grade",
        index:4,
    },
]

const HelpAndSupport = () => {
    const[active, setActive] = useState('true')
    const [instructor, setInstructor] = useState("");
    const [course, setCourse] = useState("");
    const handleFormSubmit = (e) => {
     e.preventDefault();
     alert("Submitted successfully");
};
  return (
    <div>
        <Navbar />
        <div className="bg-slate-200 md:grid md:grid-cols-2 h-[100vh]">
            <div className="my-auto p-2 mx-auto">
                <ul>
                    {FAQ.map((faq) => (
                        <li key={faq.index} className="border-2 border-slate-500 rounded m-2 p-2">
                            <span className="flex justify-between">
                                <p>{faq.title}</p>
                                <p className={`px-2 ${active ? 'block' : 'hidden'} cursor-pointer hover:text-slate-500`} onClick={() => (setActive(!active))}>&#43;</p>
                                <p className={`px-2 ${active ? 'hidden' : 'block'} cursor-pointer hover:text-slate-500`} onClick={() => (setActive(!active))}>&#727;</p>
                            </span>
                            <p className={`${active ? 'hidden' : 'block'}`}>{faq.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-solid border-2 border-slate-600 rounded sm:w-[450px] w-[75%] min-w-[300px] h-1/2 my-auto">
                <h1 className="text-3xl py-3 text-center font-semibold">Contact Us</h1>
                <hr className="bg-slate-700 mb-3 h-[2px]"/>
                <form action="" onSubmit={handleFormSubmit} className="flex flex-col w-[90%] mx-auto my-2">
                    <input type="text" name="coursename" id="coursename" value={course} placeholder="User Name" required className="bg-slate-200 text-slate-700 border-b-2 border-slate-400 my-4 outline-none" onChange={(e) => setCourse(e.target.value)}/>
                    <textarea type="text" name="lecturername" id="lecturername" value={instructor} placeholder="Information" required className="bg-slate-200 text-slate-700 border-b-2 border-slate-400 outline-none" onChange={(e) => setInstructor(e.target.value)} rows="4"/>
                    <input type="submit" value="Submit" className="cursor-pointer text-center border-solid border-2 border-slate-800 rounded-2xl bg-slate-700 text-white py-1 my-4 hover:bg-slate-400 hover:text-slate-700"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HelpAndSupport