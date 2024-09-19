import harryHeader from "../images/Harry-James-Potter-emblema.jpg"
import '../scss/header.scss'


function Header() {
 
  return (
    <div className="container-header">
       <img className="img-header" src={harryHeader} alt="Harry Potter" />
    </div>
   
  )
}

export default Header;