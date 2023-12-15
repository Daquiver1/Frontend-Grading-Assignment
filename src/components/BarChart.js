import { useEffect, useState } from "react";
import "../components-css/Barchart.css"

const BarChart = ({code, grades}) => {
    const [grade, setGrade] = useState([])
    const [codes, setCodes] = useState([])
    useEffect(() => {
        setGrade(grades)
    },[])
    console.log(grades)
    return (
        <>
            <div className="barchart">
                <div className="chartTitle"><center>Current Academic Bar Chart</center></div>
                <div className="levels-and-bars">
                    <div className="levels">
                        <div className="level 100">100%</div>
                        <div className="level 80">80%</div>
                        <div className="level 60">60%</div>
                        <div className="level 40">40%</div>
                        <div className="level 20">20%</div>
                        <div className="level 0">0%</div>
                    </div>
                    <div className="bars">
                        {grades === undefined ? null :
                           (grades.map((grad) => (
                            <div title={grad === 2 ? "Missing": "Available"} style={{"height":`${grad}%`, "background" : grad === 2 ? "red" : ""}} className="bar" ></div>
                           )))
                        }
                    </div>    
                </div>
                <div className="keys">
                    {code === undefined ? null :
                        (code.map((cod) => (
                                <span key={cod}>{cod}</span>
                        )))
                    }
                </div>
            </div>
        </>
    );
}
 
export default BarChart;