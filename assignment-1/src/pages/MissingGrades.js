import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


export default function MissingGrades(){
    return(
        <>
            <dialog id="dialog" className="p-8 rounded-2xl w-[300px]">
                <div className="w-[50px] h-[50px] m-auto mb-4 rounded-full flex justify-center font-bold items-center bg-ugBlue text-white"><FontAwesomeIcon icon={faCheck}/></div>
                <h3 className="text-2xl font-bold mb-4 text-center">Report submitted successfully</h3>
               <Link to='/dashboard'><button className="primary-button !w-full duration-150">Back to Dashboard</button></Link>
            </dialog>
            <Header />
            <main>
                <section>
                    <h1 className="text-center text-ugBlue">Missing Grade Form</h1>
                    <h3 className="text-center text-2xl mb-4 text-slate-500">Report a missing grade</h3>
                    <form onSubmit={(e)=>{e.preventDefault(); document.getElementById('dialog').showModal()}} className="w-[80%] md:w-[50%] m-auto flex flex-col items-center gap-5 rounded-2xl bg-slate-200 p-8">
                        <input className="w-full rounded-full text-ugBlue bg-white p-2 pl-4" placeholder="Course Name" required/>
                        <input className="w-full rounded-full text-ugBlue bg-white p-2 pl-4" placeholder="Instructor Name" required/>
                        <input className="w-full rounded-full text-ugBlue bg-white p-2 pl-4" placeholder="Expected Grade" required/>
                        <textarea className="w-full rounded-2xl text-ugBlue bg-white p-2 pl-4" rows={5} placeholder="A suitable explanation" required /> 
                        <button className="primary-button !w-full duration-150">Submit Report</button>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    )
}