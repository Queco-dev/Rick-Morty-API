import Estates from '../BASURA/Estates'
import { useState } from 'react'
import Encabezado from './assets/components/TituloMorti'

import './App.css'

function App() {

  

  const [pagina,setPagina]=useState("")




  return (
    <>
   <h1><Encabezado/></h1>



   <button><h1>GO!</h1></button>

   {/* <ul>
    <li><button>Episodios</button></li>
    <li><button onClick={()=>setPagina("Personajes")}>Personajes</button></li>
    <li><button>Ubicaciones</button></li>
   </ul> */}


    {/* {secction==="Personajes"? <Personajes/>: undefined} */}


    {/* <Estates/> */}





    </>
  )
}

export default App
