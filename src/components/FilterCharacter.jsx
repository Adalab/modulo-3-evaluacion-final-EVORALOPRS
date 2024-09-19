
import '../scss/filterCharacter.scss'



function FilterCharacter({setFilterName}) {
  
  const handleChange = (ev) =>{
   setFilterName(ev.target.value)

  }
  return (
    <>
     <label className="formName" htmlFor="name"> Busca por nombre: </label>
     <input className="inputName" type="text" id="name"  onChange={handleChange} />
    </>
     
   
     
  )
}

export default FilterCharacter;