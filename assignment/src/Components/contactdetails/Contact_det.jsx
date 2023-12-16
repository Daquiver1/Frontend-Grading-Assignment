import React from "react";
import './contact_det.css'
import Inyako_img from "../asserts/lnyako-danquah5 .jpg";
import Yvonne_img from "../asserts/Yvonne Lartey 3.jpg";
import Frederick_img from "../asserts/Frederick-Yuorkuu.jpg";
import Banokye_img from "../asserts/boanokye.jpeg";

const Contact_det = () => {
    return(
        <div className="details">
            <div className="info">
                <h2 className="text">Academic Affiars Directorate team</h2>
                <h4 className="text2">Administrative Officers</h4>
            </div>
            <div className="row">
                <div className="instructors">
                    <img src= {Inyako_img} alt="" className="image" />
                    <p>DIRECTOR OF ACADEMIC AFFAIRES</p>
                    <span>Lydia Anowa Nyako-Danquah</span>
                    <p>BSc(Ghana) ,M.Sc(KNUST)</p>
                    <span>aaad@ug.edu.gh</span>
                </div>
                <div className="instructors">
                    <img src= {Yvonne_img} alt="" className="image" />
                    <p>HEAD OF ADMISSIONS UNIT</p>
                    <span>Mrs, Yvonne Lartey</span>
                    <p>Senior Assistant Registrar</p>
                    <span>admissions@ug.edu.gh</span>
                </div>
                <div className="instructors">
                    <img src= {Frederick_img} alt="" className="image" />
                    <p>HEAD OF TEACHING AND EXAMINATION UNIT</p>
                    <span>Mr, Frederick Yuorkuu</span>
                    <p>Senior Assistant Registrar</p>
                    <span>teu-academic@ug.edu.gh</span>
                </div>
                <div className="instructors">
                    <img src= {Banokye_img} alt="" className="image" />
                    <p>HEAD OF BOARD AND COMMITEES UNIT</p>
                    <span>Mrs, Beatrice O.Anokye</span>
                    <p>Senior Assistant registrar <br /> B.A (Ghana), Mphil (Cambridge), Mphil (Bergen)</p>
                    <span>boards-commitees@ug.edu.gh</span>
                </div>
            </div>
        </div>
    );
};

export default Contact_det;