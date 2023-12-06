import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>
            <Header />
            <main>
                <dialog id="dialog" className="p-8 rounded-2xl w-[300px]">
                    <div className="w-[50px] h-[50px] m-auto mb-4 rounded-full flex justify-center font-bold items-center bg-ugBlue text-white"><FontAwesomeIcon icon={faCheck}/></div>
                    <h3 className="text-2xl font-bold mb-4 text-center">Signed in successfully</h3>
                <Link to='/dashboard'><button className="primary-button !w-full duration-150">Access Dashboard</button></Link>
                </dialog>
                <section className="mb-4">
                    <h2 className="text-center text-ugBlue mb-4">Login</h2>
                    <div className="w-[95%] md:w-fit m-auto p-4 md:p-8 bg-slate-100 rounded-2xl">
                        <form className="flex flex-col gap-6 items-center m-auto" onSubmit={(e)=>{e.preventDefault(); document.getElementById("dialog").showModal()}}>
                            <input type="text" pattern="[0-9]*" maxLength={8} minLength={8} className=" w-full md:w-[250px] h-[42px] rounded-full pl-4 text-ugBlue bg-white" placeholder="Student ID" required/>
                            <input type="text" pattern="[0-9]*" maxLength={5} minLength={5} className=" w-full md:w-[250px] h-[42px] rounded-full pl-4 text-ugBlue bg-white" placeholder="Student Pin" required/>
                            <button className="primary-button !w-full duration-150">Sign In</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}