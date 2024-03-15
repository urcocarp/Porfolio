import React from "react";
import style from "./Experience.module.css";

 
const ExperienceCard =({ details })=>{
    console.log(details)
    return(
        <div className={style.workExperiencieCard}><h6>{details.title}</h6>
        <div className={style.workDuration}>{details.date}<a href={details.link} className={style.link}><h6>{details.link}</h6></a></div>
        <ul>
            {details.desempeño.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
        </div>

)
}

export default ExperienceCard