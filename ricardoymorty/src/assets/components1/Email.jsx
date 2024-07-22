import { useState,useEffect } from "react";



const Email=()=>{

    const [mail,setMail]=useState([])


    useEffect( ()=>{

        getEmail()

    },[])



    const getEmail=()=>{

        let control= new AbortController()
        let options={
            method:"GET",
            header:{"Content-Type":"application/json"},
            signal: control.signal
        }

    fetch("https://jsonplaceholder.typicode.com/users",options)
        .then( (response)=>{
            const datos= response.json()
            return datos
        })
        .then( (json)=>{
            const datos2= setMail(json)
            return datos2
        })
        .catch((error)=>{console.log("terrorifico",error)})
        .finally(()=>{control.abort()})




    }

    return(
        <>
        <h2>Email</h2>
        <ul>
            {mail.map( (correo,index)=>{
                return (
                    <li key={correo.id}>{correo.email}</li>
                )
            })}
        </ul>
        
        </>
    )
}

export default Email