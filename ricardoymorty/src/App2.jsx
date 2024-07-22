import { useState } from 'react'
import Productos from './assets/components2/Productos'
// import Galeria from './assets/indexPrueba'
// import GaleriaImagenes from './assets/GaleriaImagenes/indexPrueba'
import Descripcion from './assets/components2/Descripcion'

import './App.css'

const App2=()=>{

    return(
        <>
       <ul className="indice">
    <li><a href="#productos">Productos</a></li>
    <li><a href="#galeria">Galeria</a></li>

   </ul>


        <h1>soy la App2 </h1>
        <Productos id="productos"/>
        <Descripcion id="galeria"/>

        {/* <GaleriaImagenes/> */}
        {/* <Galeria/> */}

      
        </>
    )


}

export default App2
