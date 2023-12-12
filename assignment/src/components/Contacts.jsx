
const Contact = () => {

const lecturers =[
  {
   course:"DCIT201",
   name:"Mr.Peter Tackie",
   email:"petertk@gmail.com"},

   {
   course:"DCIT203",
   name:"Mr.Abdullai Aziz",
   email:""
  },

  {
   course:"DCIT207",
   name:"Peter Sasu",
   email:"psasu542@gmail.com"},

  {
    course:"DCIT209",
    name:"Bernard Agyekum",
    email:"agyekumb@gmail.com"
  }
];

    return(
      <>
        <div className= "pt-[85px]">
              <div className="pl-5 ">
                <h1 className="font-bold text-2xl text-blue-700">Instructor Contact Page</h1>
              <h2 className="font-semibold text-xl">Contact Us</h2>
              <p className="font-sans text-xl">To report a missing grade or notify an instructor about an update on a missing grade, please reach out via one of the means below:</p>
              </div>
       
        </div>

        <div className="flex flex-row">
        <div className=" bg-gray-300 text-blue-700 font-sans text-semibold rounded-lg shadow-xl min-h-[50px] ml-5 mt-10">
      <ul className="font-bold p-[15px] align-middle">
        <li className="text-center">DCIT 201</li>
        <li>Instructor: <span className="text-black">Mr.Peter Armah</span></li>
        <li>Email: <span className="text-black">parmah54@gmail.com </span> </li>
        <li>Tel: <span className="text-black">(+233) 248-147-225 </span> </li>
      </ul>

        </div>
        <div className=" bg-gray-300 text-blue-700 font-sans text-semibold rounded-lg shadow-xl min-h-[50px] mt-10 ml-5">
        <ul className="font-bold p-[15px] align-middle">
        <li className="text-center">DCIT 203</li>
        <li>Instructor: <span className="text-black">Mr.Abdullai Aziz</span></li>
        <li>Email: <span className="text-black">dwumfour22@gmail.com </span> </li>
        <li>Tel: <span className="text-black">(+233) 530-242-985 </span> </li>
      </ul>
        </div>
        </div>



        </>
    )
}
export default Contact;