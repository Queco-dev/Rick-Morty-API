import Estates from '../BASURA/Estates'
import { useState } from 'react'
import Encabezado from './assets/components/TituloMorti'
import { Usuarios } from './assets/components1/Usuarios'
import Email from './assets/components1/Email'

import './App.css'
import './CSS/usuarios.css'

function App() {

  

 // const [pagina,setPagina]=useState("")

 const [section,setSection]=useState("usuarios")



  return (
    <>
   {/* <h1><Encabezado/></h1>



   <button><h1>GO!</h1></button> */}

   {/* <ul>
    <li><button>Episodios</button></li>
    <li><button onClick={()=>setPagina("Personajes")}>Personajes</button></li>
    <li><button>Ubicaciones</button></li>
   </ul> */}


    {/* {secction==="Personajes"? <Personajes/>: undefined} */}


    {/* <Estates/> */}
    <main className="container">
      <header className="header">
        <nav>
          <ul>
            {/* <li><button onClick={setSection("usuarios")}>Usuarios</button></li>
            <li><button onClick={setSection("contacto")}>Contacto</button></li> */}
          </ul>
        </nav>
      </header>
   
   <ul className="indice">
    <li><a href="#usuarios">Usuarios</a></li>
    <li><a href="#contacto">Contacto</a></li>

   </ul>
   

      {(section == "contacto") && <Email id="contacto"/> }
      {(section == "usuarios") &&  <Usuarios id="usuarios"/> }
  


  

   
      
   </main>
      

    </>
  )
}

export default App


//container min-width: 80vw;
//header ul{list-style-type:none   display:flex  gap:5px margin y paddin cero}