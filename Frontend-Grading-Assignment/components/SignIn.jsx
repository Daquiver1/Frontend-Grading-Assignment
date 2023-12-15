const SignIn = () => {
  return (
    <div id="SignIn" className="bg-slate-200 text-slate-600 h-[100vh] flex flex-col justify-center items-center">
        <div className="border-solid border-2 border-slate-600 rounded sm:w-[450px] w-[75%] min-w-[300px]">
            <h1 className="text-3xl py-3 text-center font-semibold">Login</h1>
            <hr className="bg-slate-700 mb-3 h-[2px]"/>
            <form action="" className="flex flex-col w-[90%] mx-auto my-2">
                <input type="number" name="username" id="username" placeholder="ID number" required className="bg-slate-200 text-slate-700 border-b-2 border-slate-400 my-4 outline-none"/>
                <input type="password" name="password" id="password" placeholder="Password" required className="bg-slate-200 text-slate-700 border-b-2 border-slate-400 outline-none"/>
                <a href="#" className="my-4 hover:font-medium">Forget password?</a>
                <a href="\MainContent" type="submit" className="text-center border-solid border-2 border-slate-800 rounded-2xl bg-slate-700 text-white py-1 my-4 hover:bg-slate-400 hover:text-slate-700">Log in</a>
                <p className="my-2 text-center">Not a member? <a href="" className="text-slate-800 font-medium">Sign Up</a></p>
            </form>
        </div>
    </div>
  )
}

export default SignIn