
import '../scss/filterHouse.scss'



function FilterHouse({setFilterHouse}) {
    const handleSelectChange =(ev)=>{
      setFilterHouse(ev.target.value)
       

    }
  return (
    <>
        <label className='formHouse' htmlFor="house"> Selecciona la casa: </label>
        <select className='selectHouse' id="house" onChange={handleSelectChange}>
            <option value="all">Todas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
        </select>
    </>
        
   
  )
}

export default FilterHouse