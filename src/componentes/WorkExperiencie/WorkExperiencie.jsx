import React, { useRef } from "react";
import style from "./WorkExperiencie.module.css"
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";

const WorkExperiencie =()=>{
    const sliderRef= useRef()
    const settings ={
        dots: false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows: false,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1
                },
            },
        ],
    }

    const slideRight =()=>{
        sliderRef.current.slickNext()
    }
    const slideLeft =()=>{
        sliderRef.current.slickPrev()
    }
    return(
        <section className={style.experiencieContainer} id="Experience">
            <div>Work Experiencie</div>
            <div className={style.experienceContent}>
                <div className={style.arrowRight} onClick={slideRight}> 
                    <span className={style["material-symbols-outlined"]}></span>
                </div>
                <div className={style.arrowLeft} onClick={slideLeft}>
                    <span className={style["material-symbols-outlined"]}></span>

                </div>
            </div>
            <div className={style.experiencieContent}>
                <Slider ref={sliderRef}{...settings}> 
                {WORK_EXPERIENCE.map((item)=>(
                    <ExperienceCard key={item.title} details={item}/>
                    ))}
                
                </Slider>
            </div>

        </section>
    )
}
export default WorkExperiencie;