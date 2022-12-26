import React from "react";
import style from './errorMessage.module.css'
const errorMessage = function (){
    return(
        <div>
            <div className={style.error}>
               <h1 className={style.textError}> Произошла ошибка попробуйте позже </h1>
            </div>
        </div>

    )
}
export default errorMessage;