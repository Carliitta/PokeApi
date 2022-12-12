import React, { useState ,useEffect} from 'react';
import {Link} from "react-router-dom"
import s from "../css/nav.module.css"
import logo from "../../img/logo.png"
import recargar from "../../img/reload.png"
import { useDispatch ,useSelector} from 'react-redux';
import { buscarPokemon, Sort,orderByType } from '../../Redux/actions';
import Paginado from './Paginado';

import { useHistory } from "react-router-dom";

const Nav = () => {

const [search, setSearch] = useState('');
 const dispatch = useDispatch()
 let history = useHistory ();
 const tipos= useSelector(state=> state.tipos)

const handleChange=(e)=>{
    setSearch(e.target.value)
}
function orderAZ(e){
    dispatch(Sort(e.target.value))
    history.push("/home") //para que actualice
  }
  function orderTipos(e) {
    dispatch(orderByType(e.target.value))
    history.push("/home") //para que actualice
   }
 const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(buscarPokemon(search))
} 
    return ( 
    <header className={s.contenedorNav}>
        <nav className={s.nav}>
            <Link to={"/home"}>
            <img className={s.logo} src={logo}></img>
            </Link>
          
            <form className={s.form} onSubmit={handleSubmit}>
                <input className={s.buscador} placeholder="Buscar Pokemon.." value={search} onChange={handleChange} />
                <button className={s.submit} type="submit"> Buscar</button>
            </form>
            <div className={s.filtros}>
                <h3  className={s.title}>Filtrar por: </h3>
                <select className={s.filterAndOrder} onChange={ orderAZ}>
                    <option>A-Z ⇧ </option>     
                    <option value="ASCENDENTE"> A-Z </option>
                    <option value="DESCENDENTE"> Z-A </option>
                </select>
                <select className={s.filterAndOrder} onChange={ orderTipos} >
                 <option>Tipos</option>
                    {
                        tipos.map(( e,i)=> <option key={i} value={e.name}> {e.name }</option>)
                    }
               </select>
            </div>
            <button className={s.btnRecargar} onClick={() => window.location.reload()}>
                <img className={s.reload} src={recargar} alt="cargar"  />
            </button>
        </nav>
    </header>
    );
}
 
export default Nav;