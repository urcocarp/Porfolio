import React from "react";
import style from "./ContacInfoCard.module.css"


const ContacInfoCard= ({iconUrl, href, text})=>{
    return(
        <div className={style.ContacDetailsCard}>
         <div className={style.icon}>
          <img  src={iconUrl}/>
         </div>
         <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>


        </div>
    )
}

export default ContacInfoCard