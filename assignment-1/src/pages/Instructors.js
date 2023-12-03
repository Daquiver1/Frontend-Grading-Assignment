import { faImage } from "@fortawesome/free-regular-svg-icons"
import { faContactCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { instructors } from "../data"
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function Instructors(){

    const [emailReceiver, setEmailReciever] = useState(null)

    function handleContactEmail(e)
    {
        const dialog = document.getElementById('dialog')
        dialog.showModal()
    }


    return(
        <>
            <Header />
            <main>
                <dialog id="dialog" className="p-8 rounded-2xl max-w-[350px]">
                    {emailReceiver && <>
                    <h2 className="mb-4">Send email to {emailReceiver.name}</h2>
                    <form>
                        <input className="w-full h-[40px] bg-slate-200 pl-4 rounded-full mb-4" type="text" maxLength={50} placeholder="Email Subject" required/>
                        <textarea className="w-full bg-slate-200 px-4 pt-2 rounded-2xl mb-4 overflow-hidden" rows={3} placeholder="Email Body" defaultValue={`Good Day, I would like to make an enquiry on my grade in the ${emailReceiver.courseID} class.`} required />
                        <span className="flex w-full justify-between gap-2">
                            <button className="w-1/2 px-4 py-2 bg-ugBlue hover:bg-white rounded-full text-white hover:text-ugBlue font-bold duration-150 border-2 border-ugBlue cursor-pointer">Submit</button>
                            <div className="w-1/2 bg-lightUgBlue rounded-full hover:bg-transparent hover:text-ugBlue duration-150 flex items-center justify-center cursor-pointer" onClick={()=>{document.getElementById('dialog').close()}}>Cancel</div>
                        </span>
                    </form>
                    </>
    }
                </dialog>
                <section>
                    <h1 className="text-center text-ugBlue mb-4">Instructors</h1>
                    <div className="flex flex-col rounded-2xl overflow-hidden border-2 border-lightUgBlue   ">
                        <div className="grid grid-cols-instruct font-bold bg-ugBlue p-4 text-white">
                            <span><FontAwesomeIcon icon={faImage} /></span>
                            <span>Instructor Name</span>
                            <span className="m-auto">Instructor Course</span>
                            <span className="m-auto"><FontAwesomeIcon icon={faContactCard}/></span>
                        </div>
                        { instructors && instructors.map((instructor, idx) => {
                            return (
                                <div className="grid grid-cols-instruct p-4 border-b-2 items-center last:border-0 border-b-lightUgBlue" key={idx}>
                                    <span className="w-[25px] h-[25px] rounded-full overflow-hidden flex place-items-center"><img src="/img/ug_logo.png"/></span>
                                    <span>{instructor.name}</span>
                                    <span className="m-auto">{instructor.courseID}</span>
                                    <span className="m-auto"><button onClick={(e)=>{handleContactEmail(e); setEmailReciever(instructor)}} className="bg-lightUgBlue hover:bg-ugBlue rounded-full px-3 py-1 text-black hover:text-white duration-150">Contact</button></span>
                                </div>
                            )
                        })

                        }
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
