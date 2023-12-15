import React from 'react'
import {FaCartPlus ,FaInstagram, FaFacebook, FaTwitter, FaPhone, FaMailBulk} from "react-icons/fa"


const Booter = () => {
  return (
    <>
    <footer>
                <div className="grid lg:grid-cols-2 md:grid-cols-1" style={{marginTop: "150px", marginBottom:'80px'}}>
                    <div>
                        <div style={{marginLeft:'40px', display: 'flex'}} className="pt-2">   
                            <div>
                                <FaCartPlus className="icon cart" style={{height: '28px', width:'25px'}}/>
                            </div>
                            <div>
                                <p className="text-xl pl-2" >
                                    GradeTracker
                                </p>
                            </div>
                        </div>
                        <p className="ml-10 text-sm pt-0">
                            Track grades anytime, anywhere!
                        </p>
                        <div>
                            <div style={{marginLeft:'40px', display: 'flex'}} className=" space-x-4 pt-12" > 
                                <div>
                                    <FaInstagram className="icon cart" style={{height: '25px', width:'25px'}}/>
                                </div>
                                <div>
                                    <FaFacebook className="icon cart" style={{height: '25px', width:'25px'}}/>
                                </div>
                                <div>
                                    <FaTwitter className="icon cart" style={{height: '25px', width:'25px'}}/>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div>
                        <div style={{marginLeft: '300px'}}>
                            <p className="text-sm">
                                Need Assistance?
                            </p>
                            <p className="text-md">
                                Our support team is available
                            </p>
                        </div>
                        <div className="mt-8" style={{marginLeft: '300px'}} >
                            <div style={{display: 'flex'}}>
                                <div>
                                    <FaPhone className="icon cart" style={{height: '20px', width:'20px'}} />
                                </div>
                                <div>
                                    <p>
                                        (+233) 592 53 2992
                                    </p>
                                </div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <FaMailBulk className="icon cart" style={{height: '20px', width:'20px'}} />
                                </div>
                                <div>
                                    <p className="text-sm pl-2">
                                        <u>support@gradetracker</u>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
         </footer>
    </>
  )
}

export default Booter;