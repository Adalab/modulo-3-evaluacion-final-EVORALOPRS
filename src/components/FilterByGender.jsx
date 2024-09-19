import '../scss/filterGender.scss'

function FilterByGender({setFilterGender}) {
    const handleChange = (ev)=>{
        setFilterGender(ev.target.value)

    }
  return (
    <>
    <label className="formGender" htmlFor="gender">Busca por genero: </label>
        <select className="selectGender" name="gender" id="gender" onChange={handleChange}>
            <option value="all">Todos</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </>
        
    
  )
}

export default FilterByGender