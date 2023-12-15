import { useEffect, useState } from "react";
import "../components-css/Calender.css"

const Calender = () => {
    const [month, setMonth] = useState() 
    // document.querySelector(".calendar-dates");
    const [today, setToday] = useState()
    const [currDate, setCurrDate ] = useState([]) 
    // document.querySelector(".calendar-current-date");
    
    useEffect(()=> {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let lit = [];
        let monthName = "";
        let dayone = new Date(year, month, 1).getDay();
        let lastday = new Date(year, month + 1, 0).getDate()
        let monthlastdate = new Date(year, month, 0).getDate();
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ] 
        for(let i = 1; i <= months.length; i++){
           if(month === i) monthName += months[i];
        }

        for(let i = dayone; i > 0; i--){
            lit.push(monthlastdate - i + 1)
        }

        for(let i = 1; i <= lastday; i++) {
                    lit.push(i)
        }
        
        setToday(date.getDate())
        setCurrDate(lit)
        setMonth(monthName)
    },[])
    
    
    return (
        <>
        <div className="Calender">
            <div className="calendar-container">
                <header className="calendar-header">
                    <p className="calendar-current-date">{month}</p>
                    {/* <div className="calendar-navigation">
                        <span id="calendar-prev"
                            className="material-symbols-rounded">
                            {"<"}
                        </span>
                        <span id="calendar-next"
                            className="material-symbols-rounded">
                            {">"}
                        </span>
                    </div> */}
                </header>
                <div className="calendar-body">
                    <ul className="calendar-weekdays">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <ul className="calendar-dates">{
                        currDate.map((days) => (
                            <li className={Number(days) === Number(today) ? "activeDay": "not-active"}>{days}</li>
                        ))
                    }</ul>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Calender;