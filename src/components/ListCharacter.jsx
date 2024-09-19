//Importamos el componente cardcharacter para que renderice a cada contacto individual
import CardCharacter from "./CardCharacter"
import '../scss/listCharacter.scss'


/*Explicacion del metodo funcinal que usamos para recorrer el array
1- hacemos una funcion, en este caso lo hemos llamado infoCharacter
2- con la funcion map recorremos el array y aplica una función a cada elemento,nos devuelve un nuevo array
3- dentro del map, creamos un componente nuevo para cada "item(puede ser cualquier nombre)", recibira dos props, key(clave unica en este caso usaremos el id),Se pasa el item completo como prop al componente Contact. De esta forma, el componente Contact puede acceder a los datos de cada contacto.
 */
function ListCharacter({list,sort,sortOrder}) {
    const infoCharacter = () => {
        return list.map(item => <CardCharacter key={item.id} item={item}/>)
        
    }
    const handleClick =()=>{
      sort();
    }
    

  return (
    <div>
    <button className="orderBtn" onClick={handleClick}> Ordena  {sortOrder === "asc" ? "A-Z" : "Z-A" } </button>
     <div className="div-container">
        {/*En la siguiente línea de codigo, renderizamos y ejecutamos la función infoCharacter devolviendo un array de componentes*/}
        {infoCharacter()}       
    </div>
    
    </div>
  ) 
   
}

export default ListCharacter;