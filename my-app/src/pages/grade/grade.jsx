import React from "react";
import "./grade.css"
import { useState } from "react";
import Card from "./card";
import Data from "./data";
import Buttons from "./buttons";

function Grade() {
    const [item, setItems] = useState(Data);
    const menuItems = [...new Set(Data.map((val) => val.Year))]

    const filterItems = (year) => {
        const newItems = Data.filter((newval) => newval.Year === year)
        setItems(newItems)
    }

    return (
        <div className="grade-page">
            <h1>Grade Page</h1>
            <div className="row">
                <h3>Grades</h3>
                <Buttons 
                    menuItems = {menuItems}
                    filterItems={filterItems}
                    setItems={setItems}
                />
                <Card item={item}/>
            </div>
        </div>
    )
}

export default Grade