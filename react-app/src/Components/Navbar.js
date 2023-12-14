import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import {HiOutlineBars3} from "react-icons/hi2";

import{
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
  }  from "@mui/material";
  import  HomeIcon  from "@mui/icons-material/Home";
  import InfoIcon from "@mui/icons-material/Info";
  import { CommentRounded as CommentRoundedIcon} from "@mui/icons-material";
  import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
  

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon:<HomeIcon/>,
        },
        {
            text: "Dashboard",
            icon:<InfoIcon/>,
        },
        {
            text: "Help & Support",
            icon:<CommentRoundedIcon/>,
        },
        {
            text: "Contact",
            icon:<PhoneRoundedIcon/>,
        },
    ]


  return (
    <nav>
    <div className="nav-logo-container">
        <img src={Logo} alt="" />
    </div>
    <div className="navbar-links-container">
        <a href="/Home">Home</a>
        <a href="/GradeReport">Grade Report</a>
        <a href="/InstructorContact">Instructor Contact</a>
        <a href="/Contactx">Help & Support</a>
    </div>
    <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
    anchor="right" >
        <Box
         sx={{width:250}}
         role="presentation"
         onClick={() => setOpenMenu(false)}
         onKeyDown={() => setOpenMenu(false)}
         >
            <list>
                {menuOptions.map((item, index)  => (
                    <ListItem key={item.text} diablePadding >
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </list>
        </Box>
    </Drawer>
    </nav>

  );  
};

export default Navbar;
