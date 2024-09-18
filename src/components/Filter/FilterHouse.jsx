




function FilterHouse({setFilterHouse}) {
    const handleSelectChange =(ev)=>{
        setFilterHouse(ev.target.value)

    }
  return (
    <form>
        <label htmlFor="house"> Selecciona la casa: </label>
        <select id="house" onChange={handleSelectChange}>
            <option value="all">Todas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Huffelpuff">Huffelpuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
        </select>
    </form>
  )
}

export default FilterHouse