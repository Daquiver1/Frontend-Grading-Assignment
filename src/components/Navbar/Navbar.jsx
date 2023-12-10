import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SetNavSwitch } from '../../features/nav/navSwitchSlice';
import logo from './assets/logo.svg';

const Navbar = () => {
    const dispatch = useDispatch()
    const navSwitch = useSelector((state) => state.navSwitch.value)
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toLanding = () => {
        dispatch(SetNavSwitch(0))
        navigate("/")
    }
    const toDashbord = () => {
        dispatch(SetNavSwitch(1))
        navigate("/dashboard")
    }
    const toGradeReport = () => {
        dispatch(SetNavSwitch(2))
        navigate("/gradereport")
    }
    const toMissingGradeForm = () => {
        dispatch(SetNavSwitch(3))
        navigate("/missinggradeform")
    }

    const toInstructorContact = () => {
        dispatch(SetNavSwitch(4))
        navigate("/contact")
    }

    const toHelpAndSupport = () => {
        dispatch(SetNavSwitch(5))
        navigate("/helpandsupport")
    }

    const toLogIn = () => {
        dispatch(SetNavSwitch(6))
        navigate("/login")
    }


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className=' bg-[#294671] fixed px-[2%] w-full h-[80px] flex items-center justify-between z-10'>
                <div className=' flex items-center gap-[22px] lg:gap-[42px] xl:gap-[82px]'>
                    <img src={logo} alt="" className=' rounded-[98px] w-[98px] h-[56px]' />
                    {/* <button className=' bg-[#4A6387] text-white rounded-[6px] flex w-[64px] lg:w-[81.83px] h-[35px] xm:h-[40px] text-center justify-center items-center'>Shop</button> */}
                </div>
                

                <div className=' text-[14px] hidden md:flex gap-[16px] lg:gap-[35px]'>
                    <button onClick={() => toLanding()} className={` ${navSwitch === 0 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>LANDING</button>
                    <button onClick={() => toDashbord()} className={` ${navSwitch === 1 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>DASHBOARD</button>
                    <button onClick={() => toGradeReport()} className={` ${navSwitch === 2 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>GRADE REPORT</button>
                    <button onClick={() => toMissingGradeForm()} className={` ${navSwitch === 3 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>MISSING GRADE FORM </button>
                    <button onClick={() => toInstructorContact()} className={` ${navSwitch === 4 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>INSTRUCTOR CONTACT </button>
                    <button onClick={() => toHelpAndSupport()} className={` ${navSwitch === 5 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>HELP AND SUPPORT </button>
                </div>

                <div className=' hidden xm:flex text-[14px] gap-[18px] xl:gap-[24.17px]'>
                    <button onClick={()=>toLogIn()} className='flex bg-[#4A6387] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px]'>Log In</button>
                </div>

                <div className=' text-white md:hidden'>
                    <RxHamburgerMenu onClick={toggleMenu} className=' w-8 h-8' />
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className=" md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
                        <div className="bg-[#294671] w-4/5 h-full max-w-[14rem] absolute left-0 transform z-50">
                            {/* Close Button */}
                            <button
                                className="absolute text-white top-5 right-5"
                                onClick={closeMenu}
                            >
                                <IoMdClose className=' w-8 h-8' />
                            </button>
                            {/* Your navigation links here */}
                            <div className=' pl-4 items-start justify-start mt-20 text-[16px] flex flex-col gap-[15px] '>
                                <div className=' xm:hidden flex text-[14px] gap-[18px]'>
                                    <button className='flex bg-[#4A6387] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px]'>Log In</button>
                                </div>
                                <button onClick={() => toLanding()} className={` ${navSwitch === 0 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>LANDING</button>
                                <button onClick={() => toDashbord()} className={` ${navSwitch === 1 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>DASHBOARD</button>
                                <button onClick={() => toGradeReport()} className={` ${navSwitch === 2 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>GRADE REPORT</button>
                                <button onClick={() => toMissingGradeForm()} className={` ${navSwitch === 3 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>MISSING GRADE FORM </button>
                                <button onClick={() => toInstructorContact()} className={` ${navSwitch === 4 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>INSTRUCTOR CONTACT </button>
                                <button onClick={() => toHelpAndSupport()} className={` ${navSwitch === 5 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>HELP AND SUPPORT </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar
