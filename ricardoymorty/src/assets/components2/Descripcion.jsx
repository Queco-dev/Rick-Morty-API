import { useState,useEffect } from "react";

const Descripcion=()=>{

    const [definicion,setDefinicion]=useState([])


    useEffect( ()=>{

        getDefinicion()
    })


    const getDefinicion=async()=>{

        const control= new AbortController()
        try{
            const response=await fetch("https://fakestoreapi.com/products")
            const objJs= await response.json()
            setDefinicion(objJs)

        }catch(error){console.log("vaya error",error)}
        finally{control.abort()}
    }

    return(
        <>

        <h1>Descripción</h1>

        <ul>
            {definicion.map( (ref,index)=>{

                return(
                    
                    <li key={ref.id}>{ref.description}</li>
                )

            })}
           
        </ul>
        
        </>
    )
}

export default Descripcion