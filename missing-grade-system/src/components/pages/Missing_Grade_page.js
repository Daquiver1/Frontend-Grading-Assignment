import React from "react";

function MissingGrade() {

    return (
        <div className="container">
            <div className="card mt-4">
                <div className="card-body">
                    <h2>
                        Missing Grade form page
                    </h2>

                    <section className="section">

          <div className="container">

            <div className="card-shadow">

              <div className="card-body">

                <div className="row">

                  <div className="col-md-6">
                       <h6 className="main-heading">
                        
                        Missing Grade Form
                        </h6>  
                        <hr />

                        <div className="form-group">
                          <label className="mb-1">Course Name</label>

                          <input type="text" class="form-control" placeholder="Enter name of course" />
                          </div>   

                          <div className="form-group">
                          <label className="mb-1">Instructor's Name</label>

                          <input type="text" class="form-control" placeholder="Enter Instructor's name" />
                          </div>   

                          <div className="form-group">
                          <label className="mb-1">Expected Grade</label>

                          <input type="text" class="form-control" placeholder="Enter Expected grade" />
                          </div>  

                          <div className="form-group">
                          <label className="mb-1">Explanation</label>

                          
                          <textarea rows="3" className="form-control" placeholder="Enter Explanation" ></textarea>
                          </div>    

                          <div className="form-group py-3">

                          
                          <button type="button" className="btn btn-primary shadow w-100"  >Submit Form</button>
                          </div>    
                  </div>

                 

                </div>

              </div>

            </div>

          </div>


        </section>

                </div>

            </div>
        </div>

        
    );

}


export default MissingGrade;