import s from "../css/crearPoke.module.css"

export default function CrearPoke() {

    return(
    <div className={s.contenedorForm}>
        <form action="" className={s.formulario}>
        <input type="text" className="form-inputs" placeholder="Ingrese un numero de vida.."/>
        <input type="text" className="form-inputs" placeholder="Ingrese un numero de defensa.." />
        <input type="text" className="form-inputs" placeholder="Ingrese un numero de velocidad.."/>
        <input type="text" className="form-inputs" placeholder="Ingrese un numero de altura.."/>
        <input type="text" className="form-inputs" placeholder="Ingrese un numero de peso.."/>
        <select className={s.select}>
            <option value="">ingrese un tipo--</option>
            {
                
            }
        </select>
       </form>
       <input type="submit" value="Crear Pokemon" />
    </div>

    )
};
