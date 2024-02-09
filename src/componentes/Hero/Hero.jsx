import React from "react";
import style from "./Hero.module.css"
import port from '../../assets/port.png'
import fileJs from '../../assets/javascript_icon_130900.png'
import html from '../../assets/file_type_html_icon_130541.png'
import css from '../../assets/file_type_css_icon_130661.png'
import react1 from "../../assets/file_type_reactjs_icon_130205.png";
import sql from "../../assets/file_type_sql_icon_130152.png"

const Hero =()=>{
    return(
    <section className={style.heroContainer}>
        <div className={style.heroContent}>
            <h2>Construyendo experiencias digitales que inspiren</h2>
            <p>Desarrollador apasionado | Transformando ideas en soluciones web fluidas y visualmente impresionantes
            </p>
        </div>

            <div className={style.img}>
             <div>
                    <img src={port} style={{ borderRadius:'25px'}} alt="" />
             </div>

            <div>
                <div className={style.icon}>
                    <img src={fileJs} alt="" />
                </div>
                <div className={style.icon}>
                    <img src={html} alt="" />
                </div>
                <div className={style.icon}>
                    <img src={css} alt="" />
                </div>
                <div className={style.icon}>
                    <img src={react1} alt="" />
                </div>
                <div className={style.icon}>
                    <img src={sql} alt="" />
                </div>
            </div>
          </div>
      
</section>
    )
}

export default Hero