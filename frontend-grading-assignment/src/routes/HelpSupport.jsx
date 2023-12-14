import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const HelpSupport = () => {
    return (
        <div>
            <Navbar />

            <div style={{marginTop: "7rem"}}>
            <div className="top">
        <h1 className="too">
            Welcome to the University of Ghana Missing Grade Reporting 
            System Help and Support page!
        </h1>
        <p className="mnbv1, fs-3">This page allows provides the student frequently 
            asked question about University of Ghana Missing Grade Reporting 
            System page!. 
        </p>
     </div>
     <div className="top1">
        <h1 className="too" style={{textAlign: "center"}}>
           Frequently Asked Questions
        </h1>
     </div>
            </div>
             <div className="container w-50" style={{border: "solid blue"}}>
                <form action="" className="m-auto">
                <div className="top1" >
                    <h1 className="too" style={{textAlign: "center"}}>
                    Contact Our Technical Team
                    </h1>
                </div>
                    <div className="container my-3, fs-4">
                        <label htmlFor="name, ">Student Name</label>
                        <input type="text" name="" className="form-control" id="" />
                    </div>

                    <div className="container my-3, fs-4">
                        <label htmlFor="name">Course Name</label>
                        <input type="text" name="" className="form-control" id="" />
                    </div>
                    <div className="container my-3, fs-4">
                        <label htmlFor="name">Explanation</label>
                        <textarea name="explanation" id="" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="container my-4">
                            <input type="submit" name="submit" id="submit" className="form-control btn btn-dark " />
                        </div>
                </form>
             </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default HelpSupport