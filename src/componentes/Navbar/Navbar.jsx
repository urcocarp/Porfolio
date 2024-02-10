import React, { useState } from "react";
import style from './Navbar.module.css'
import MobileNav from "../MobileNav/MobileNav";


const NavBar =()=>{
    
    return ( 
    <>
    <MobileNav/>
      <nav className={style.nav}>
        <div className={style.navContent}>
         <ul>
            <li>
              <a className={style.menuIt}>Home</a> 
            </li>
            <li>
              <a className={style.menuIt} href="#Skills">Skils</a> 
            </li>
            <li>
        
              <a className={style.menuIt}href="#Experience">Work Experience</a> 
            </li>
            <li>
              <a className={style.menuIt}>Contact Me</a> 
            </li>
            <button className={style.contactMe}>
             Hire me
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