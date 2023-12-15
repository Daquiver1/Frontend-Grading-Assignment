import React from "react";
import "./navbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';


const NavBar = () => {
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <SearchOutlinedIcon />
                </div>
                <div className="iterm">
                    <div className="item">
                        <LanguageOutlinedIcon />
                        English
                    </div>
                    <div className="item">
                        <ChatOutlinedIcon />
                        Chat
                    </div>
                    <div className="item">
                        <ListAltOutlinedIcon  />
                        Lists
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;