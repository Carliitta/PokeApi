import Nav from "./Nav"
import { useState, useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux"
import { useParams } from "react-router-dom"
import { detallePokemon } from "../../Redux/actions"
import s from "../css/detalle.module.css"

export default function Detalle() {

    const detail = useSelector((state)=> state.detail)
    let {id}= useParams()
    let dispatch= useDispatch()
    
    useEffect(() => {
      dispatch(detallePokemon(id))
      
    },[]) 
  
        if(detail.length===0){

            return(
                <div className={s.loadingDiv}>
            
                    <p className={s.spinner}></p>
                    <p className={s.loadingp}>Loading...</p>
                </div>
            )
        }

     return(
        <>
      <Nav/>
      <div className={s.container}>
           <img className={s.img} src={ detail.sprites.other.dream_world.front_default} alt="not image"/>
       <div className={s.items}>   
            <h2 className={s.name}>{detail.name}</h2> 
          
            <div className={s.skills}>
               <div className={s.detalle}>
                <p>Vida:</p>
                <p>{ detail.stats[0].base_stat}%</p> 
               </div>
               <div className={s.menu}>
                 <div className={s.vida}></div>
               </div>
            </div>
            {/* ///// */}
            <div className={s.skills}>
               <div className={s.detalle}>
                <p>Ataque:</p>
                <p>{detail.stats[1].base_stat}%</p> 
               </div>
               <div className={s.menu}>
                 <div className={s.ataque}></div>
               </div>
            </div>
           {/*  ////// */}
            <div className={s.skills}>
               <div className={s.detalle}>
                <p>Defensa:</p>
                <p>{detail.stats[2].base_stat}%</p> 
               </div>
               <div className={s.menu}>
                 <div className={s.defensa}></div>
               </div>
            </div>
            {/* ///// */}
            <div className={s.skills}>
               <div className={s.detalle}>
                <p>Velocidad:</p>
                <p>{detail.stats[3].base_stat}%</p> 
               </div>
               <div className={s.menu}>
                 <div className={s.velocidad} ></div>
               </div>
            </div>
          {/*   ////// */}
          <div className={s.skills}>
               <div className={s.detalle}>
                <p>Altura:</p>
                <p>{detail.height}m</p> 
               </div>
               <div className={s.menu}>
                 <div className={s.altura} ></div>
               </div>
            </div>
              {/*   ////// */}
          <div className={s.skills}>
               <div className={s.detalle}>
                <p>Peso:</p>
                <p>{detail.weight} Kg</p> 
               </div>
               <div className={s.menu}>
                 <div className={s.peso} ></div>
               </div>
            </div>
          {/* /// */}
          <div className={s.skills}>
               <div className={s.detalle}>
                <p>Tipo:</p>
                {
                detail.types.map((e,i)=>{
                return (
                <div key={i} className={s.typecontainer}>
                    <p> {e.type.name} </p> 
                </div>
               )
          })
       }
       
               </div>
               
            </div>
         
        </div> 
     </div>  
   </>
    )  
};

