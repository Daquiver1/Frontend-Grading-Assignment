import UgLogo from "../Components/University_of_Ghana_logo.png"

export default function LoginPageBody() {
    return(
        <>
        <form>
        <div class="container card text-bg-dark" id="signuppagebg">
            <div className="container" id="signinborder"> 
                <img src={UgLogo} className="d-grid gap-2 col-2 mx-auto" alt="uglogo" ></img>
            <   h1 className="text-center">PLease Sign Into Your Account</h1>
                <div class="d-grid gap-2 col-4 mx-auto">
                    <label for="exampleFormControlInput1" class="visually-hidden">ID</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="12345678"/>
                </div>
                <div class="d-grid gap-2 col-4 mx-auto">
                    <label for="inputPassword2" class="visually-hidden">Pim</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="PIN"/>
                </div>
                <div class="d-flex justify-content-center">
                    <a className="btn btn-primary" id="submit-btn" href="/Dashboard" role="button">Submit</a>
                    {/*<button type="submit" href="/Dashboard" class="btn btn-primary mb-3">Submit</button>*/}
                </div>
            </div>     
        </div>
        </form>
        
        </>
    ) 
}