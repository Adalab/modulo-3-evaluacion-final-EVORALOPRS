import { useEffect, useState } from "react"
import callDataApi from "../services/api" //importamos lode datos de la api
import Header from "./Header"
import Footer from "./Footer"
import ListCharacter from "./ListCharacter"
import { Route, Routes, matchPath, useLocation} from "react-router-dom"
import DetailCharacter from "./DetailCharacter"
import FilterCharacter from "./Filter/FilterCharacter"
import FilterHouse from "./Filter/FilterHouse"
// trabajamos con las rutas








function App() {
  const [listCharacter, setListCharacter]=useState([])
  const [filterName, setFilterName] = useState("")
  const [filterHouse, setFilterHouse] = useState("all") 
  const [sortList, setSortList] = useState("asc"); // estado para gestonar el orden acs/des

  // aqui que nos aparzca siempre los datos, cargara la pagina para que no realice el bucle y solo se ejecute una sola vez
  useEffect(()=>{
    callDataApi().then(cleanData => setListCharacter(cleanData))
    /*.catch(error =>console.error("error al cargar los datos", error));
    setListCharacter([]);*/
  },[])


  const filterCharacter= listCharacter.filter((item) =>{ 
    return item.name.toLowerCase().includes(filterName.toLowerCase())

  })
  .filter(item => filterHouse === "all" || item.house === filterHouse)
  //
  .sort((a, b) => {
    //ordenar por nombre
    if(sortList === "asc"){
      return a.name.localeCompare(b.name);// orden ascendente

    }else{
      return b.name.localeCompare(a.name);// orden descendente
    }    
  })

  const sortOrderList = () =>{
    setSortList((item)=> (item === "asc" ? "desc" : "acs"));
  }


   const {pathname} = useLocation();
   const characterRoute = matchPath("/character/:id", pathname)
   const idCharacter = characterRoute ? characterRoute.params.id :null;
   const characterDetail = listCharacter.find(item => item.id === idCharacter)
   


  return (
    
    <>

    <Header />
    <Routes>
      <Route path="/character/:id" element={<DetailCharacter data={characterDetail}/>} />
      <Route path="/" element={
      <>
        <FilterCharacter  setFilterName={setFilterName}/>
        <FilterHouse setFilterHouse={setFilterHouse} />
        <ListCharacter list={filterCharacter} sort={sortOrderList} sortOrder={sortList}/>
      </>
        
        }/>
        
       
        
    </Routes>
    <Footer />
    
    
    </>
  )
}

export default App
