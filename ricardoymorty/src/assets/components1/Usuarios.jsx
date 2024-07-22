import { useState,useEffect } from "react";



const Usuarios=()=>{

    const [usuarios,setUsuarios]=useState([])



    
    
    useEffect( ()=>{

        getUsuarios()   
        
    },[])
    
    const getUsuarios=()=>{
        
        let control= new AbortController()
        let options={
            method:"GET",
            headers:{"Content-type":"application/json"},
            signal: control.signal, //para activar el control
        }
    
        
        const Datos= fetch("https://jsonplaceholder.typicode.com/users",options)
        .then(response=>{
            const data= response.json()
            return data
        })
        .then(json=>{
            const data= setUsuarios(json)
            return data
        })
        .catch(error=>{console.log("hay un error",error)})
        .finally(()=>control.abort())


    }


    return(
        <>

        <h2>Usuarios</h2>
        <ul>
            {usuarios.map( (chicos,index)=>{

                return(
                    <li key={chicos.id}>{chicos.name}</li>
                )
            })}
        </ul>
        
        </>
    )

}

export {Usuarios}

