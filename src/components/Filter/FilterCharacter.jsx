




function FilterCharacter({setFilterName}) {
  
  const handleChange = (ev) =>{
   setFilterName(ev.target.value)

  }
  return (
    <form>
      <label htmlFor="name"> Busca por nombre: </label>
      <input type="text" id="name"  onChange={handleChange} />
    </form>
     
  )
}

export default FilterCharacter