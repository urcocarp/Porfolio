import React, { useState } from "react";
import style from './Skills.module.css'
import { SKILLS } from "../../utils/data";
import SkillsInfoCard from "../SkillsinfoCard/SkillsinfoCards";
import SkillsCard from "./SkillsCard/SkillsCard";


const Skills =()=> {

    const [selectedSkills, setSelectedSkills]= useState(SKILLS[0]);
    const handleSelectSkills = (data)=>{
        setSelectedSkills(data)
    }


    return(

      <section className={style.skillscontainer} id="Skills">
        <h5>Technical Proficiency</h5>
        <div className={style.skilsContent}>
        <div className={style.skills}>
          {SKILLS.map((item)=>(
            <SkillsCard
            key={item.tittle}
            icon={item.icon} 
            tittle={item.tittle}
            isActive={selectedSkills.tittle=== item.tittle}
            onClick={()=>{
                handleSelectSkills(item)
            }}
            />
          ))}

        </div>

        <div className={style.skillsInfo}>
            <SkillsInfoCard
            heading={selectedSkills.tittle}
            skills={selectedSkills.skills}
            
            />
        </div>
    </div>
      </section>
    )
}

export default Skills


