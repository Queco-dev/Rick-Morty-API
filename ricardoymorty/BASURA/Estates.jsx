import { useState } from "react"

const Estates=()=>{

    tareas=["tareas 1","tareas 2","tareas 3"]
    const [datos,setDatos]=useState=([])

    const [NuevaTarea, setNuevatarea]=useState("")

return(
    <>
    <h1>Lista de Tareas</h1>
    <input
    value={NuevaTarea}
    onChange={(e)=>{setNuevatarea(e.target.value)}}
    placeholder="amor"/>
    <button>hola</button>
    <ul>
        {datos.map( (hola)=>{
            return( 
                <li>{hola}</li>
            )

        })}
       
    </ul>
    </>
)

}

export default Estates