import s from "../css/tarjeta.module.css"
const Tarjeta = ({name,imagen,type}) => {
    return (
        <div className={s.all}>
            <div className={s.container}>
                <h2 className={s.name}>{name}</h2>
                <img className={s.img} src={imagen} alt="sin imagen"/>
                <div  className={s.parrafos}>
                <p  className={s.parrafo}> Tipo: {type} </p>
                </div>
        </div>
   </div>
      );
}
 
export default Tarjeta;