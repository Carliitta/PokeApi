import Nav from "./Nav";
import { useDispatch, useSelector } from 'react-redux'
import Tarjeta from "./Tarjeta";
import s from "../css/principal.module.css"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { buscarPokemon, obtenerPokemons,siguiente,anterior, getTypes } from "../../Redux/actions";
import Paginado from "./Paginado";
import axios from "axios"
const API_URL="https://pokeapi.co/api/v2/pokemon/?offset=1&limit=100"

const Principal = () => {

    const pokemon= useSelector((state) => state.pokeFil)
    const [pagina, setPagina] = useState (1);
    const [porPagina, setPorPagina] = useState (4);
  
    const maximo = Math.ceil(pokemon.length / porPagina);
 
    
    const dispatch = useDispatch()
 
    useEffect(() => {
      dispatch(obtenerPokemons(API_URL))
      dispatch(getTypes())
  
       }, [])

       if(pokemon.length===0)
       return(
         <div className={s.loadingDiv}>
           <p className={s.spinner}></p>
           <p className={s.loadingp}>Loading...</p>
         </div>
       )
 
    return ( 
      <>
        <Nav/>
        <div className={s.contenedorPrincipal}>
            <div className={s.container}>
              <div className={s.grid}>
                  {   
                  pokemon.slice (
                    (pagina - 1) * porPagina,
                    (pagina - 1) * porPagina + porPagina
                  ) . map(c=>(
                    <Link key={c.id} className={s.link} to={"/" + c.id}>
                        <Tarjeta
                        name={ c.name}
                        imagen={ c.sprites.other.dream_world.front_default}
                        type={ c.types.map(t=>t.type.name)}
                        />
                    </Link>
                )
                )
            } 
       </div> 
    </div> 
    </div> 
       <Paginado  pagina={pagina} setPagina={setPagina} maximo={maximo}/>
      </>
    );
}
 
export default Principal;