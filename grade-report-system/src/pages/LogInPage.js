import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';




const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] =useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { login } = useAuth();

  

  const studentCredentials = [
    {
      email: '11288689',
      password: '86765',
      name: 'Bayat',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11276276',
      password:'53267',
      name: 'Joseph',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11278276',
      password:'52567',
      name: 'James',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11279276',
      password:'56747',
      name: 'Steve',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11276312',
      password:'59980',
      name: 'Stacy',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11251276',
      password:'53267',
      name: 'John',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11412576',
      password:'64167',
      name: 'Joel',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11514276',
      password:'66467',
      name: 'Thomas',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11112276',
      password:'69267',
      name: 'Gabriel',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11314176',
      password:'63289',
      name: 'Stanley',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11316786',
      password:'63281',
      name: 'Travis',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11311111',
      password:'53267',
      name: 'Scott',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11312312',
      password:'49687',
      name: 'Jude',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11318967',
      password:'31254',
      name: 'Benzema',
      grade: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE 3 A 12','DCIT103 OFFICE PRODUCTIVITY TOOLS 3 B+ 10.5','MATH121 ALGEBRA AND TRIGONOMETRY 3 C+ 7.5',
    'MATH123 VECTORS AND GEOMETRY 3 A 12','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I 3 A 12','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING 3 A 12']
    },
    {
      email:'11316276',
      password:'43467',
      name: 'Navas',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11323376',
      password:'83267',
      name: 'Delphina',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11381476',
      password:'59267',
      name: 'Juliet',
      grade: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE 3 A 12','DCIT103 OFFICE PRODUCTIVITY TOOLS 3 B+ 10.5','MATH121 ALGEBRA AND TRIGONOMETRY 3 C+ 7.5',
    'MATH123 VECTORS AND GEOMETRY 3 A 12','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I 3 A 12','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING 3 A 12']
    },
    {
      email:'11351276',
      password:'49267',
      name: 'Mohammed',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11393376',
      password:'39267',
      name: 'Rahman',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    },
    {
      email:'11324476',
      password:'29267',
      name: 'Jonathan',
      grade: {Course: ['DCIT101 INTRODUCTION TO COMPUTER SCIENCE','DCIT103 OFFICE PRODUCTIVITY TOOLS','MATH121 ALGEBRA AND TRIGONOMETRY',
      'MATH123 VECTORS AND GEOMETRY','STAT111 INTRODUCTION TO STATISTICS AND PROBABILITY I','UGRC150 CRITICAL THINKING AND PRACTICAL REASONING'],
      credits:[3,3,3,3,3,3], grading:['A','B+','A', 'A','A','A']},
    }

  ];


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const matchedStudent = studentCredentials.find(
      (student) => student.email === email && student.password === password
    );
    
    if (matchedStudent) {
      // Login successful
      setIsLoggedIn(true);
      setError('');
      navigate('/dashboard');
      login(matchedStudent);
    } else {
      // Login failed
      alert('Invalid student ID or PIN');
    };
  };

   
  return (
    <div className="w-full sm:h-screen flex flex-row h-auto bg-[#ece3e9]">
        <header className="absolute inset-x-0 top-0 z-50 ">
            <nav className="flex items-center justify-between p-6 lg:px-8 h-[80px] bg-[#000435] fixed w-full" aria-label="Global" >
            <h1 className='text-4xl text-[#fff]'><b>University of Ghana</b></h1> 
              <div className="flex lg:flex-1 pt-[15px]">
                  <a href="#" className="-m-1.5 p-1.5">
                      <img
                      className="h-[100px] w-auto"
                      src={require("../assets/uglogo.png")}
                      alt=""
                      />
                  </a>
              </div>
             
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <Link to="/index" className="text-sm font-semibold leading-6 text-[#fff]">
                   Home
                  </Link>
              </div>
            </nav>
        </header>
        <div className="flex items-center justify-center h-screen ml-[350px]">
          <div className="w-[1000px] h-screen sm:px-[200px] flex flex-col justify-center px-5">
          <form>
            <h2 className="sm:text-[28px] text-[25px]">Sign into your account</h2>
            <div className="w-full flex flex-row gap-x-[20px] mt-3"></div>
            <br />
            <InputField
              placeholder="Student ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <InputField
              placeholder="PIN"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="h-[30px] flex items-center ">
              {password.length < 5 && password.length !== 0 && (
                <p className="text-sm text-red-600">
                  Password should be five characters
                </p>
              )}
            </div>
            <br />
            <button
              onClick={onSubmitHandler}
              className="bg-[#06b6d4] text-white w-full h-[40px] rounded-lg"
            >
              Login
            </button>
          </form>
          <span className="text-sm text-right mt-[28px]">
            <Link to="/reset" className="text-[#000000]">
              Forgot your pin?
            </Link>
          </span>
          <div className="w-full flex items-center text-sm py-4 gap-x-8">
            <hr className="w-full" />
            or
            <hr className="w-full" />
          </div>
          <div className="w-full flex place-content-center gap-x-4">
            <button className="border-[1px] border-neutral-400 rounded-lg px-5 py-2 hover:bg-[#e0f2fe]">
              <img src={require("../assets/Google.png")} className="w-6" />
            </button>
            <button className="border-[1px] border-neutral-400 rounded-lg px-5 py-2 hover:bg-[#e0f2fe]">
              <img src={require("../assets/Apple Logo.png")} className="w-6" />
            </button>
            <button className="border-[1px] border-neutral-400 rounded-lg px-5 py-2 hover:bg-[#e0f2fe]">
              <img src={require("../assets/twitterblack.png")} className="w-6" />
            </button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default LogIn