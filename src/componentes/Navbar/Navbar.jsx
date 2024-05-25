import React, { useState } from "react";
import style from './Navbar.module.css'
import MobileNav from "../MobileNav/MobileNav";


const NavBar =()=>{
  const handleDownloadClick=()=>{

    const link= document.createElement('a')
    link.href= '/Nico05.pdf';
    link.download='Nico05.pdf';
    // document.body.appendChild(link);
    link.click()
    // document.body.removeChild(link);
  };
    return ( 
    <>
    <MobileNav/>
      <nav className={style.nav}>
        <div className={style.navContent}>
         <ul>
            <li>
              <a className={style.menuIt} href="#Home">Home</a> 
            </li>
            <li>
              <a className={style.menuIt} href="#Skills">Skils</a> 
            </li>
            <li>
        
              <a className={style.menuIt}href="#Experience">Experiencia</a> 
            </li>
            <li>
              <a className={style.menuIt}href="#ContacMe">Contacto</a> 
            </li>
            <button className={style.contactMe} onClick={handleDownloadClick}>
             Descarga CV
            </button>
         </ul>
         <button class={style.btn}>
            <span 
            class={"material-symbols-outlined"}
            >
            </span>
         </button>
        </div>
      </nav>
     </>
    )
}

export default NavBar 