import React from "react";
import  './widget.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Widget = ({ type }) => {
    return(
        <div className="widget">
            <div className="left">
                <span className="titles">User</span>
                <span className="counter">Notting to show</span>
                <span className="link">see all students</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpOutlinedIcon />
                    20%
                </div>
                <PersonOutlineOutlinedIcon className="icon"/>
            </div>
        </div>
    );
};

export default Widget;