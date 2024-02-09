import React, { useState } from "react";
import style from './NavBar.module.css'
import MobileNav from "../MobileNav/MobileNav";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";

const NavBar =()=>{
    const [openMenu, setOpenMenu]= useState(false);
    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    }
    return ( 
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className={style.nav}>
        <div className={style.navContent}>
         <ul>
            <li>
              <a className={style.menuIt}>Home</a> 
            </li>
            <li>
              <a className={style.menuIt}>Skils</a> 
            </li>
            <li>
              <a className={style.menuIt}>Work Experience</a> 
            </li>
            <li>
              <a className={style.menuIt}>Contact Me</a> 
            </li>
            <button className={style.contactMe} onClick={()=>{}}>
             Hire me
            </button>
         </ul>
         <button class={style.btn} onClick={toggleMenu}>
            <span 
            class={"material-symbols-outlined"}
            style={{fontSize:"1.8rem"}}
            >{openMenu ? "close": "menu"}
            </span>
         </button>
        </div>
      </nav>
     </>
    )
}

export default NavBar 