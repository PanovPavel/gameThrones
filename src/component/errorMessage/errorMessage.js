import React from "react";
import style from './errorMessage.module.css'
import { useRouteError } from "react-router-dom";


const errorMessage = function (){
    const error = new useRouteError();
    console.error(error);
    return(
        <div>
            <div className={style.error}>
               <h1 className={style.textError}> Произошла ошибка попробуйте позже </h1>
            </div>
        </div>

    )
}
export default errorMessage;