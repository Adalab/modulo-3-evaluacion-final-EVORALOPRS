//
 // este componente es para renderizar cada tarjeta de los personajes de Harry Potter

import { Link } from "react-router-dom";
import '../scss/CardCharacter.scss'


  
 
 
 function CardCharacter({item}) {
   return (
     <article className="container">
         <Link className="link" to={`/character/${item.id}`}>
           <img className="imagen" src={item.img || "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"} alt="" />
           <h4 className="itemCard">{item.name}</h4>
           <h5 className="itemCard">{item.species}</h5>
         </Link>
      </article>
   )
 }
 
 export default CardCharacter;