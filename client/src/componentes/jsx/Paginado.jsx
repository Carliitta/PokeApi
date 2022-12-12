import axios from "axios"
import React, { useState ,useEffect} from 'react';
import { obtenerPokemons, siguiente } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import styles from "../css/paginado.module.css"


const Paginado =  ({pagina, setPagina, maximo}) => {

    const [input, setInput] = useState (1);

    const nextPage = () => {
      setInput (parseInt(input) + 1);
      setPagina (parseInt(pagina) + 1);
  
    };
  
    const previousPage = () => {
      setInput (parseInt(input) - 1);
      setPagina (parseInt(pagina) - 1);
    };
  
    const onKeyDown = e => {
      if (e.keyCode == 13) {
        setPagina (parseInt (e.target.value));
        if (
          parseInt (e.target.value < 1) ||
          parseInt (e.target.value) > Math.ceil(maximo) ||
          isNaN (parseInt (e.target.value))
        ) {
          setPagina (1);
          setInput (1);
        } else {
          setPagina (parseInt (e.target.value));
        }
      }
    };
  
    const onChange = e => {
      setInput (e.target.value);
    };
  
    return (
     <div className={styles.divPrin}>
      <div className={styles.container}>
        <button  className={styles.btns} disabled={pagina === 1 || pagina < 1} onClick={previousPage}>
        anterior
        </button>
        <input
        className={styles.input}
          onChange={e => onChange (e)}
          onKeyDown={e => onKeyDown (e)}
          name="page"
          autoComplete="off"
          value={input}
        />
        <p> de {maximo} </p>
        <button className={styles.btns}
          disabled={pagina === Math.ceil (maximo) || pagina > Math.ceil (maximo)}
          onClick={nextPage}
        >
         siguiente
        </button>
      </div>

     </div>
    );
  };
 
export default Paginado;