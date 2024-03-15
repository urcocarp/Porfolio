import React from "react";
import style from "./ContacMe.module.css"
import ContacInfoCard from "./ContacInfoCard/ContacInfoCard";
import iconEmail from "../../assets/icons8-email-48.png"
import iconGitHub from "../../assets/icons8-github-48.png"
import iconLink from "../../assets/icons8-linkedin-48.png"
import ContacForm from "./ContacForm/ContactForm";


const ContacMe =()=>{
    return(
       <section className={style.contacContainer} id="ContacMe">
        <h5>Contactame</h5>
        <div className={style.contacContent}>
            <div>
            
            <ContacInfoCard 
                iconUrl={iconEmail}
                text="urcocarp1986.nr@gmail.com"
                href="urcocarp1986.nr@gmail.com"/>
              
            <ContacInfoCard
                iconUrl={iconGitHub}
                text="https://github.com/urcocarp"
                href="https://github.com/urcocarp"
                />
                
            <ContacInfoCard
                iconUrl={iconLink}
                text="https://linkedin.com/in/nicolas-rodriguez"
                href="https://linkedin.com/in/nico-rodriguez86"
                
                />
            </div>
            </div>

            <div>
              <ContacForm/>
            </div>


   
       </section>
    )
}

export default ContacMe;