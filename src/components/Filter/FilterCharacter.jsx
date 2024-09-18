




function FilterCharacter({setFilterName}) {
  const handleChange = (ev) =>{
   setFilterName(ev.target.value)

  }
  return (
    <form>
      <label htmlFor=""> Busca por nombre: </label>
      <input type="text"  onChange={handleChange} />
    </form>
     
  )
}

export default FilterCharacter