//
 // este componente es para renderizar cada tarjeta de los personajes de Harry Potter

import { Link } from "react-router-dom";

  
 
 
 function CardCharacter({item}) {
   return (
     <article>
         <Link to={`/character/${item.id}`}>
           <img src={item.img || "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"} alt="" />
           <h4>{item.name}</h4>
           <h5>{item.species}</h5>
         </Link>
      </article>
   )
 }
 
 export default CardCharacter;