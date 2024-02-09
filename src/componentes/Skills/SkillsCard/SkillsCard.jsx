import React from "react";
import './SkillsCard.css'


const SkillsCard=({tittle,icon,isActive,onClick})=>{
    
    return(
        <div
        className={`skills-card ${isActive ? "active":""}`}
        onClick={()=>onClick()}
        >
        <div className='icon-style'>
            <img src={icon} />
        </div>
        <span>{tittle}</span>
        </div>
    )
}

export default SkillsCard;