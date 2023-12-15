import UgLogo from "../Components/University_of_Ghana_logo.png"

export default function MissingGradeFormBody() {
    return(
        <>
        
        <div class="container card text-bg-dark" id="generalpgbg">
            <div className="container" id="signinborder"> 
        <form>
                <img src={UgLogo} className="d-grid gap-2 col-1" alt="uglogo" ></img>
            <   h1 className="text-left">PLease fill the form below</h1>
                <div class="d-grid gap-2 col-5">
                    <label for="exampleFormControlInput1" class="visually-visible">Course Code</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg. DCIT 201"/>
                </div>
                <div class="d-grid gap-2 col-5">
                    <label for="inputPassword2" class="visually-visible">Instructor Name</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="eg. Mark Attah"/>
                </div>
                <div class="d-grid gap-2 col-5">
                    <label for="inputPassword2" class="visually-visible">Expected Grade</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="eg. A"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Explanation</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="eg. I know my self. I learnt before the paper."></textarea>
                </div>
                <div class="mb-3">
                    <a className="btn btn-primary" id="submit-btn" href="/Dashboard" role="button">Submit</a>
                    {/*<button type="submit" href="/Dashboard" class="btn btn-primary mb-3">Submit</button>*/}
                </div>
            
        </form>
            </div>     
        </div>

        </>
    ) ;   
}