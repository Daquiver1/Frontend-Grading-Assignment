import {useState} from 'react';
import Soli from '../images/Dr. Soli.jpeg';
import HOD from '../images/Jamal-Deen-Abdulai-2.jpg';
import Julius from '../images/Julius-Ludu.jpg';
import CBASman from '../images/Prince-Boakye-Sekyerehene.jpg';
import Eben from '../images/Ebenezer-Owusu-13.jpg';
import MarkAtta from '../images/Mark Atta Mensah_2.jpeg';
import loginbg from '../images/contact1ed.jpeg';
import Sidebar from '../components/Sidebar';



const InstructorContact = () => {
const [/*open, setOpen*/] = useState(true);

  return (
    <div className="flex">

      <Sidebar/>

      

      

      <div className="p-7 flex-1 bg-cover bg-no-repeat  relative" style={{ backgroundImage: `url(${loginbg})` }}>
      
    <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
      Instructor Contact Information
    </h2>
  </div>
  <div className="flex bg-Niagara">
    <div className="bg-Thistle shadow p-2 rounded-lg grid grid-cols-2 gap-1 hover:shadow-lg transition-shadow duration-200">
      <img className="rounded-full w-32 h-32 object-cover" src={Soli} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Michael Soli</div>
          <div className="text-gray-500">Web Development Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: agbosoli@gmail.com</div>
          <div>Phone: +233 541 456 789</div>
        </div>
      </div>
      <img className="rounded-full w-32 h-32 object-cover" src={HOD} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Jamal-Deen Abdulai</div>
          <div className="text-gray-500">Head of Department</div>
        </div>
        <div>
          <div className="mt-2">Email: jmabdu19@gmail.com</div>
          <div>Phone: +233 456 765 009</div>
        </div>
      </div>
      <img className="rounded-full w-32 h-32 object-cover" src={Julius} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Julius Ludu</div>
          <div className="text-gray-500">AI & Network Development Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: juliusl419@gmail.com</div>
          <div>Phone: +233 261 886 229</div>
        </div>
      </div>
    </div>
    <div className="bg-lavenderGrey shadow p-2 rounded-lg grid grid-cols-2 gap-1 ml-6 hover:shadow-lg transition-shadow duration-200">
      <img className="rounded-full w-32 h-32 object-cover" src={MarkAtta} alt="Mark Atta Mensah" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Mark Atta Mensah</div>
          <div className="text-gray-500">Software Engineering Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: attamark@gmail.com</div>
          <div>Phone: +233 247 654 321</div>
        </div>
      </div>
      <img className="rounded-full w-32 h-32 object-cover" src={CBASman} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Prince Boakye Sekyerehene</div>
          <div className="text-gray-500">Data Science Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: tooknow999@gmail.com</div>
          <div>Phone: +233 003 765 062</div>
        </div>
      </div>
      <img className="rounded-full w-32 h-32 object-cover" src={Eben} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Ebenezer Owusu</div>
          <div className="text-gray-500">Machine Learning Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: ebenOwu98@gmail.com</div>
          <div>Phone: +233 222 456 068</div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
    
}

export default InstructorContact;