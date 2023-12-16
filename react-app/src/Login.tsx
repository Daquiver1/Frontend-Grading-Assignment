import  {useState} from "react"
import './Login.css'
function Login() {
    const [name, setName]=useState(' ');
const [email, setEmail]=useState(' ');
const [pass, setPass]=useState(' ');

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(email);
}

    return(
        <>  
        <head>
      <link rel="stylesheet" href="#Home.tsx" />
    </head>
  
            <div className='App'>
    <div className="login">
       
    <div >
    <form className="formlogin" onSubmit={handleSubmit} >
        <h1 className='heading'>Login</h1>
        <br></br>
        <div className='coke'>
        <label className='part' >Fullname</label>
    <input className="input" value={name} onChange={(e) => setName(e.target.value)} id='name'type='name' placeholder=' fullname ' name='name'></input>

   <br></br> <label className='part' >Student email</label>
    <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} id='email'type='email' placeholder='kfagyeman001@st.edu.ug.gh' name='email'></input>

  <br></br>  <label className='part' >Password</label>
    <input  className="input" value={pass} onChange={(e) => setPass(e.target.value)}  id='password'type='email' placeholder='*****' name='password'></input><br></br>
    </div>
     <br></br>  <button className='but' type="submit">Login </button>
     

  </form>
  </div>
  </div>
  </div>
 
          
        </>
    )
    }

export default Login;