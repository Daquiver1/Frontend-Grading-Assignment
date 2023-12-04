import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import{
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
  }  from "@mui/material";
  import  HomeIcon  from "@mui/icons-material"
  import InfoIcon from "@mui/icons-material/Info"
  import { CommentRounded} from "@mui/icons-material";
  import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
  import ShoppingCartRoundedIcon from "@mui/icons-material/shoppingcartroun";



const Navbar = () => {
    const [openMenu.setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon:<HomeIcon/>,

            text: "About",
            icon:<InfoIcon/>,

            text: "Testimonials",
            icon:<CommentRoundedIcon/>,

            text: "Contact",
            icon:<PhoneRoundedICon/>,
        },
    ]


  return (
    <nav>
    <div className="nav-logo-container">
        <img src={Logo} alt="" />
    </div>
    <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
    </div>
    </nav>
  );  
};

export default Navbar;
