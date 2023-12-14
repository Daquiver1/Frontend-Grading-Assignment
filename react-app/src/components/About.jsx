const About = () => {
  return ( 
    <div className="w-full bg-[beige] py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-col-2">
        <img src={image} alt="" srcset="" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-lgreen font-bold ">what we do</p>
          <h2 className="capitalize md:text-4xl sm:text-3xl text-2xl font-bold py-2">the function of this application</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quas deserunt harum aliquid sunt molestiae aperiam ipsam esse quo aspernatur perspiciatis totam saepe earum voluptatum nam, veritatis ad dolorem nemo.

          </p>

          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-lgreen">Get Started</button>
        </div>
      </div>
    </div>
   );
}
 
export default About;