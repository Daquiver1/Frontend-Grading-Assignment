const Login = () => {
    return ( 
        <div className="homeHero">
            <h1>
            GRADE REPORT SYSTEM
            </h1>
            <form action="POST">
                <input type="text" placeholder="Identity number" className="student" required/>
                <input type="password" placeholder="Passcode" className="pin" required/>
                <input type="submit" className="submit"/>
            </form>
        </div>
     );
}
 
export default Login;