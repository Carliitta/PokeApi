import { TYPES } from "./actions"
const initialState={
  pokemones:[],
  detail:[],
  tipos:[],
  pokeFil:[]
}
export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case TYPES.OBTENER_POKEMON:
        return{
           ...state,
          pokemones: action.payload,
          pokeFil: action.payload
        }
        case TYPES.BUSCAR_POKEMON:
        
        return{
          ...state,
         pokeFil: action.payload
       }
       case TYPES.DETALLE_POKEMON:
       return{
        ...state,
       detail: action.payload
     }
     case TYPES.OBTENER_TIPO :
      return {
      ...state,
       tipos: action.payload
  }
     case TYPES.ORDER_BY_NAME:
      if(action.payload==="ASCENDENTE"){
         return {
           ...state,
           pokeFil: state.pokeFil.sort((a, b) => {
             if (a.name < b.name) {
               return -1;
           }
           if (a.name > b.name) {
               return 1;
           }
           return 0;
         }) 
       }
      }else{
         return {
           ...state,
           pokeFil: state.pokeFil.sort((a, b) => {
             if (a.name < b.name) {
               return 1;
           }
           if (a.name > b.name) {
               return -1;
           }
           return 0;
         }) 
       }
      }
      case TYPES.ORDER_TYPE :
      return { 
          ...state, 
           
        pokeFil: state.pokemones.filter((c) => {
          return c.types.find((c) => { 
          return c.type.name === action.payload})})
           
      }

        default:
          return state;
    }
  
}