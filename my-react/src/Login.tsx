import  {useState} from "react"
import './App.css'


function Login() {
  
    const [name, setName]=useState(' ');
    const [email, setEmail]=useState(' ');
    const [pass, setPass]=useState(' ');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(email);
    }
    return(<> 
      
    <head>
      <link rel="stylesheet" href="#Home.tsx" />
    </head>
  
            <div className='App'>
    <div className="login-form">
       

    <form className="form-login" onSubmit={handleSubmit} >
        <h1 className='heading'>Login</h1>
        <label className='part' >Fullname</label>
    <input value={name} onChange={(e) => setName(e.target.value)} id='name'type='name' placeholder=' fullname ' name='name'></input>
    <label className='part' >Student email</label>
    <input  value={email} onChange={(e) => setEmail(e.target.value)} id='email'type='email' placeholder='nanaantwiwaa624@st.edu.ug.gh' name='email'></input>
    <label className='part' >Password</label>
    <input  value={pass} onChange={(e) => setPass(e.target.value)}  id='password'type='email' placeholder='*********' name='password'></input><br></br>
    <button type="submit">Login </button>
    
  </form>
  </div>
  </div>
  </>
    )

}
export default Login;