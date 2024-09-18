//tenemos que hacer una ruta, no un evento click para que nos lleve al detalle de la tarjeta de los personajes seleccionados

import { Link } from "react-router-dom";
import ListCharacter from "./ListCharacter";


function DetailCharacter({data}) {

  return (
    
    <div>
      <Link to="/"> Volver al incio</Link>
        {data ? 
        <article>
            <img src={data.img || "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"} alt="" />
            <h3>{data.name}</h3>
            <h5> Casa: {data.house}</h5>
            <h5> Especie: {data.species}</h5>
            <h5> Estatus: {data.alive ? "Vivo" : "Muerto"}</h5>
            <h5> Ascendencia: {data.ancestry}</h5>
            <h5> Núcleo varita: {data.wand}</h5>
            <h5> Patronus: { data.patronus}</h5>
         </article> :null
    }
         
    </div>
  )
}

export default DetailCharacter;