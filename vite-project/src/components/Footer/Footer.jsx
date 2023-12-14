import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillYoutube, AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi';

const socialLinks =[
    {
    path: "",
    icon: <AiFillYoutube className="group-hover:text-white w-7 h-9"/>,
    },

        {
        path: "",
        icon: <BiLogoFacebook className="group-hover:text-white w-7 h-9"/>,
        },

            {
            path: "",
            icon: <AiFillInstagram className="group-hover:text-white w-7 h-9"/>,
            },

                 {
                path: "",
                icon: <RiLinkedinFill className="group-hover:text-white w-7 h-9"/>,
                },
];


const quickLinks01=[

            {
                path: "/home",
                display: "Home",
            },

            {
                path: "/dashboard",
                display: "Dashboard",
            },

            {
                path: "/instructorContact",
                display: "Instructor Contact",
            },

            // {
            //     path: "/",
            //     display: "Blog",
            // },

];

        const quickLinks02=[

            {
                path: "/gradeReport",
                display: "Grade Report",
            },

            {
                path: "/missingGrade",
                display: "Missing Grade",
            },

           


        ];


        const quickLinks03=[

           

            {
                path: "/helpAndSupport",
                display: "Help And Support",
            },  
        ];


const Footer = () => {
    const year = new Date().getFullYear()

    return(
        <footer className="pb-16 pt-10 bg-blue-100">
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt="" className='w-[100px] h-[100px]'/>
                        <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">Copyright © {year} </p>

                        
                        <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">Connect with us:</p>
                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((link, index)=> <Link to={link.path} key={index} 
                            className="w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center 
                            justify-center group hover:bg-primaryColor hover:hover-none">
                                {link.icon}
                            </Link>)}
                        </div>
                    </div>


                    <div>
                    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
                    <ul>
                        {quickLinks01.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor" >{item.display}</Link></li>
                        
                        )}
                    </ul>
                </div>

                <div>
                    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to:</h2>
                    <ul>
                        {quickLinks02.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor" >{item.display}</Link></li>
                        
                        )}
                    </ul>
                </div>

                <div>
                    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>
                    <ul>
                        {quickLinks03.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor" >{item.display}</Link></li>
                        
                        )}
                    </ul>
                </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;