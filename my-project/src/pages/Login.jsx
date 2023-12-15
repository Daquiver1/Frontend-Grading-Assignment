const Login = () => {
  return ( 
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover ">
      <div className="bg-slate-800 border border-slate-100 rounded-md p8 shadow-lg backdrop-filter backdrop-blur-sm  bg-opacity-30 relative">
        <h1 className="text-4xl text-whitefont-bold text-center mb-6 ">Login</h1>
        <form action="">
        <div className="relative my-4">
          <input type="email" className="block-w-72 py-2.3 px-0 text sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer "  name="email" />
          <label htmlFor="">Your Email</label>
        </div>
        <div className="relative my-4">
          <input type="password"  className="block-w-72 py-2.3 px-0 text sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer " name="password" />
          <label htmlFor="">Your Password</label>
        </div>
        <div>
          <div>
            <input type="checkbox" name="remember" id="Remember-me"/>
            <label htmlFor="Remember-me"></label>
          </div>
          <span>Forgot Password?</span>
        </div>     
        <button type="submit">Login</button>
        <div>
          <span>New Here? <link to='Register'>Create an Account</link></span>
        </div>
        </form>
      </div>  
    </div>
   );
}
 
export default Login;
<div>
  <div>
    <h1>Login</h1>
    <div>
      <input type="email" name="email" id="" />
    </div>
  </div>
</div>