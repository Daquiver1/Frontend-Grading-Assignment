const Footer = () => {
    return(
        <div>
             <footer>
                <div className="container-fluid p-5" style={{ "margin-top": "10rem", "background": "black"}}>
                   <div className="container">
                    <div className="row p-4 mt-3">
                        <div className="col col-6 col-md-3 col-sm-g col-xs-12">
                            <h1 className="text-primary">77000</h1>
                            <p className="text-white">Students</p>
                        </div>
                        <div className="col col-6 col-md-3 col-sm-g col-xs-12">
                           <h1 className="text-primary">56</h1>
                           <p className="text-white">Schools</p>
                        </div>
                        <div className="col col-6 col-md-3 col-sm-g col-xs-12">
                            <h1 className="text-primary">30</h1>
                            <p className="text-white">Colleges</p>
                        </div>
                        <div className="col col-6 col-md-3 col-sm-g col-xs-12">
                             <h1 className="text-primary">150</h1>
                             <p className="text-white">Departments</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col col-6 col-md-3 col-sm-g col-xs-12">
                            <div className="address">
                                <h4 className="text-primary">Get In Touch</h4>
                                <ul className="list-unstyled">
                                    <li className="py-1 text-dark"><a href="#" className="text-white text-decoration-none my-2 py-1 text-dark"><i className="bi bi-telephone-fill pe-3"></i>(+91) 82888</a></li>
                                    <li className="py-1 text-dark"><a href="#" className="text-white text-decoration-none my-2 py-1 text-dark"><i className="bi bi-envelope pe-3"></i>info@gmail.com</a></li>
                                    <li className="py-1 text-dark">
                                        <a href="#" className="text-white text-decoration-none my-2 py-1 text-dark"><i className="bi bi-geo-alt-fill pe-3"></i>P.O BOX LG 25 <br />
                                        </a> 
                                    </li>
                                    <li>
                                        <a href="#" className="text-white text-decoration-none my-2 py-1 text-dark">
                                            Legon, Accra
                                        </a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-6 col-md-3 col-sm-g col-xs-12">
                        <div className="address">
                                <h4 className="text-primary">Useful Links</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/" className="text-white text-decoration-none my-2 py-1 text-dark">
                                        <i className="bi bi-caret-right"></i> Home
                                        </a>
                                    </li>
                                    <li>
                                    <a href="login" className="text-white text-decoration-none my-2 py-1 text-dark">
                                        <i className="bi bi-caret-right"></i> Login
                                        </a>
                                    </li>
                                    <li>
                                    <a href="dashboard" className="text-white text-decoration-none my-2 py-1 text-dark">
                                        <i className="bi bi-caret-right"></i> Dashboard
                                        </a>
                                    </li>
                                    <li>
                                       <a href="report-grade" className="text-white text-decoration-none my-2 py-1 text-dark">
                                           <i className="bi bi-caret-right"></i> Report Grade
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="text-white text-decoration-none my-2 py-1 text-dark">
                                           <i className="bi bi-caret-right"></i> Help & Support
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                            
                        </div>
                        <div className="col col-6 col-md-3 col-sm-g col-xs-12">
                            <h4 className="text-primary">Our Services</h4>
                            <ul className="list-unstyled">
                                    <li>
                                        <a href="/" className="text-white text-decoration-none my-2 py-1 text-dark">
                                        <i className="bi bi-caret-right"></i> Service-1
                                        </a>
                                    </li>
                                    <li>
                                    <a href="/" className="text-white text-decoration-none my-2 py-1 text-dark">
                                        <i className="bi bi-caret-right"></i> Service-2
                                        </a>
                                    </li>
                                    <li>
                                    <a href="/" className="text-white text-decoration-none my-2 py-1 text-dark">
                                        <i className="bi bi-caret-right"></i> Service-3
                                        </a>
                                    </li>
                                    <li>
                                       <a href="/" className="text-white text-decoration-none my-2 py-1 text-dark">
                                           <i className="bi bi-caret-right"></i> Service-4
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="text-white text-decoration-none my-2 py-1 text-dark">
                                           <i className="bi bi-caret-right"></i> Service-5
                                        </a>
                                    </li>
                                    
                                </ul>
                        </div>
                        <div className="col col-6 col-md-3 col-sm-g col-xs-12">
                            <div className="newsletter">
                                <h4 className="text-primary">Subscribe To  our Newsletter</h4>
                                <p className="text-white">Get the latest news, updates and offers from us.</p>
                                {/* <form action="#" method="post">
                                    <input type="email" name="email" placeholder="Your Email"/><br/>
                                    <button type="submit"><span><i class="bi bi-arrow-bar-down"></i></span> Subscribe Now</button>
                                </form> */}
                                <form className="row">
                                    <div className="container">
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                
                                    <div className="container mt-2">
                                        <button type="submit" className="btn btn-primary mb-3">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                   </div>
                   <hr  className="text-white"/>
                   
                   <div className="container">
                    <p className="text-center text-white">Copyright &copy; 2023. All rights reserved | Design By Richmond Andoh</p>
                    <p className="text-center text-white">
                        <span className="m-2">
                          Follow Me on 
                        </span>
                        <span>
                            <a href="" className="text-decoration-none">
                              <i className="bi bi-facebook text-white fs-5 m-1"></i>
                            </a>
                            <a href="" className="text-decoration-none">
                               <i className="bi bi-instagram text-white fs-5 m-1"></i>
                            </a>
                            <a href="" className="text-decoration-none">
                               <i className="bi bi-twitter-x text-white fs-5 m-1"></i>
                            </a>
                            <a href="" className="text-decoration-none">
                               <i className="bi bi-linkedin text-white fs-5 m-1"></i>
                            </a>
                        </span>
                    </p>
                   </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;