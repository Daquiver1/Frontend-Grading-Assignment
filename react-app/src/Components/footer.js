import React from 'react'
import Logo from "../Assets/Logo.svg"
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-sction-one">
            <div className="footer-logo-container" >
                <img src={Logo} alt="logo" />
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <FaFacebookF />
                <AiFillYoutube />
                <AiFillLinkedin />
            </div>
        </div>
        <div className="footer-section-two" >
            <div className="footer-section-columns">
                <span>Help</span>
                <span>FAQ</span>
                <span>Share</span>
            </div>
            <div className="footer-section-columns">
                <span>025-630-9657</span>
                <span>missinggrades@gmail.com</span>
                <span>asnkwamebakor@gmail.com</span>
            </div>
            <div className="footer-section-columns" >
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>

        </div>

    </div>
  )
}

export default footer