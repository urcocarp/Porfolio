import React from "react";
import style from "./ContactForm.module.css";


const ContacForm=()=>{
    return (
      <div className={style.FormContent}>
        <form>
            <div className={style.nameFormContent}>
                <input type="text" name="firstname" placeholder= "Nombre"/>
                <input type="text" name="lastname" placeholder="Apellido"/>
            </div>
            <input type="text" name="email" placeholder="Email"/>
            <textarea type="text" name="message" placeholder="Mensaje" rows={3}/>

            <button>Enviar</button>
        </form>

      </div>
    )
}

export default ContacForm;