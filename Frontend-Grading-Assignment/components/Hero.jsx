const Hero = () => {
  return (
    <div className="bg-slate-200 py-5 flex justify-around" id="home">
      <section className="my-auto mx-auto sm:mt-auto sm:w-[45%] mt-9 w-[90%] text-slate-800">
        <h1 className="text-2xl mb-2">Welcome to the Student Grade Reporting System</h1>
        <p>Our Student Grade Reporting System is a modern and intutive front-end web application designed to revolutionize the way students interact with their academic grades. It goes beyond traditional systems, offering a user-friendly interface that allows students to effortlessly view, report and manage their grades in real time.</p>
        <div className="mt-4">
          <a href="" className="bg-slate-500 rounded p-1 hover:bg-slate-600 text-white mr-5">learn More &#8595;</a>
          <a href="/SignIn" className="bg-slate-500 rounded p-1 hover:bg-slate-600 text-white">Sign in</a>
        </div>
      </section>
      <img src="../src/assets/mobile-book.svg" alt="" width="45%" className="hidden sm:block"/>
    </div>
  )
}

export default Hero