import backgroundimage from '../images/Legon University, Accra - Ghana.jpeg'


const Login = () => {
    return (
        
<div>
<div className=' h-[100vh] flex justify-center items-center bg-cover '>
<div>
        <div className=''>
            <h1>Login</h1>
            <div>
            <input type='email' />
            <label htmlFor=''> Your Email</label>
        </div>
       
        <div className=''>
            <input type='email' />
            <label htmlFor=''> Your Email</label>
        </div>
        </div>
        <div className=''>
            <input type='checkbox' name="" id="" />
            <label htmlFor=''> Your Email</label>
        </div>
        <span>Forgot Password</span>


        
        </div>
</div>


 <div className=''  >
      <img className='bg-cover bg-no-repeat bg-center h-full w-full' src={backgroundimage} alt="" /> 
        </div>
</div>
     );
}
 
export default Login;