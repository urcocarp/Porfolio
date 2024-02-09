import React from "react";
import style from "./ContacInfoCard.module.css"


const ContacInfoCard= ({iconUrl, text})=>{
    return(
        <div className={style.ContacDetailsCard}>
         <div className={style.icon}>
          <img  src={iconUrl}/>
         </div>
         <p>{text}</p>


        </div>
    )
}

export default ContacInfoCard