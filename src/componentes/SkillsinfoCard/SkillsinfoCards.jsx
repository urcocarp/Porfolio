import React from "react";
import style from "./SkillsinfoCard.module.css"

const SkillsInfoCard =({heading, skills})=>{
    return <div className={style.skillsinfo}>

        <h6>{heading}</h6>
        <div className={style.infoContent}>
            {skills.map((item, index)=>(
                <React.Fragment key={`skills_${index}`}>
                    <div className={style.info}>
                        <p>{item.skills}</p>
                        <p className={style.porcentaje}>{item.porcentaje}</p>
                    </div>
                    <div className={style.progressBg}>
                        <div className={style.skillsProgress} style={{width: item.porcentaje}}></div>
                    </div>

                </React.Fragment>
            ))}
        </div>

    </div>

    
    
}

export default SkillsInfoCard;