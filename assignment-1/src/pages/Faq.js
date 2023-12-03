import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { QAs } from "../data";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


function handleToggle(e){
    e.preventDefault()
    const pTag = e.target.parentElement.parentElement.children[1];
    const arrow = e.target.parentElement.children[1]
    if(pTag.localName === 'p') {pTag.style.display = (pTag.style.display == "none") ? 'block': 'none';}
    if(arrow.localName === 'svg'){arrow.style.transform = (arrow.style.transform == 'rotate(180deg)')? 'rotate(0deg)': 'rotate(180deg)'  }
    console.log(arrow.localName)
}

export default function Faq(){
    return(
        <>
            <Header />
            <main>
                <section>
                    <h1 className="text-center text-ugBlue mb-4">Frequently Asked Questions</h1>
                    <div className="w-[80%] m-auto flex flex-col gap-6">
                        {  QAs.map((QA, index)=>{

                            return (
                                <div className="faq" key={index}>
                                    <span onClick={handleToggle} className="cursor-pointer rounded-2xl overflow-hidden bg-ugBlue text-white items-center px-4 py-2 flex justify-between">
                                        <h3 className="text-xl inline-block font-bold">{QA.question}</h3>
                                        <FontAwesomeIcon icon={faArrowDown} />
                                    </span>
                                    <p className="p-2 text-lg" style={{display:"none"}}>{QA.answer}</p>
                                </div>
                            )
                        })

                        }
                    </div>
                </section>
                <section>
                    <h3 className="text-slate-300 text-xl mb-4 w-fit m-auto">Contact Us</h3>
                    <form className="w-[80%] flex m-auto border-[1.5px] border-slate-200 rounded-2xl overflow-hidden">
                        <span className="w-1/2 bg-slate-200 p-8 flex items-center">
                            <h2 className="text-ugBlue text-6xl">We want to hear from you!</h2>
                        </span>
                        <span className=" w-1/2 flex flex-col items-center justify-center gap-5 p-8">
                            <input className="w-[300px] rounded-full text-ugBlue bg-slate-200 p-2 pl-4" placeholder="Your Name" required/>
                            <input className="w-[300px] rounded-full text-ugBlue bg-slate-200 p-2 pl-4" placeholder="Your Email" required/>
                            <textarea className="w-[300px] rounded-2xl text-ugBlue bg-slate-200 p-2 pl-4" placeholder="Message" rows={3} required />
                            <button className="primary-button duration-150 !w-[300px]">Send Message</button>
                        </span>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}