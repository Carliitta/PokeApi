import axios from "axios"
export const siguiente =[]
export const anterior =[]
export const TYPES={
   OBTENER_POKEMON:"OBTENER_POKEMON",
   BUSCAR_POKEMON:"BUSCAR_POKEMON",
   DETALLE_POKEMON :"DETALLE_POKEMON",
   ORDER_BY_NAME:" ORDER_BY_NAME",
   ORDER_TYPE :"ORDER_TYPE ",
   OBTENER_TIPO:"OBTENER_TIPO"
}


export function obtenerPokemons(url){
  try {
    return  function (dispatch) {
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
         
            Promise.all(data.results.map(u=>fetch(u.url))).then(pokemon =>
            Promise.all(pokemon.map(res => res.json()))
            
        ).then(poke => {
      
            dispatch({
          type:TYPES.OBTENER_POKEMON,
          payload:poke
        })    
    })
  })
  }
  } catch (error) {
      console.log(error)
  }
}




export  function buscarPokemon(nombre) {
    return  function (dispatch) {
        try {
          fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}` )
          .then(response=>response.json())
          .then(poke =>{
            var arrPokemon=[]
            arrPokemon.push(poke)
      
             dispatch({
              type:TYPES.BUSCAR_POKEMON,
              payload:arrPokemon
            })   
          })
        } catch (error) {
          
            console.log(error)
        }
    }
  }

  export function detallePokemon(id) {
    return  function (dispatch) {
        try {
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(response=>response.json())
          .then(data=>{
             dispatch({
              type:TYPES.DETALLE_POKEMON,
              payload:data
            }) 
          })
        } catch (error) {
            console.log(error)
        }
    }
  } 

  export function getTypes() {
    return  function (dispatch) {
      fetch('https://pokeapi.co/api/v2/type')
      .then(response=>response.json())
      .then(data=>{
 
          dispatch({
            type:TYPES.OBTENER_TIPO,
            payload: data.results
        })
      })
    }
  }
  //////ordenamiento
  export  function Sort(order) { //recive una forma de ordenar
    return{
     type :TYPES.ORDER_BY_NAME ,
     payload:order
    }
 };

 export  function orderByType(order) { //recive una forma de ordenar
  return{
   type :TYPES.ORDER_TYPE ,
   payload:order
  }
};
 
