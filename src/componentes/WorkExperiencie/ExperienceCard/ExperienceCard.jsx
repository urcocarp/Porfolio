import React from "react";
import style from "./Experience.module.css";

 
const ExperienceCard =({ details })=>{
    return(
        <div className={style.workExperiencieCard}><h6>{details.title}</h6>
        <div className={style.workDuration}>{details.date}<h6>{details.link}</h6></div>
        <ul>
            {details.desempeño.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
        </div>

)
}

export default ExperienceCard