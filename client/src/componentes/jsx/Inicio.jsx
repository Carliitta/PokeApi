import React from 'react';

import s from "../css/inicio.module.css"
import { Link } from "react-router-dom";

const Inicio = () => {
    return ( 
    <div className={s.inicio}>
        <Link to={"/home"}>
         <button className={s.inicioBtn}>Inicio</button>
        </Link>
    </div> 
    );
}
 
export default Inicio;