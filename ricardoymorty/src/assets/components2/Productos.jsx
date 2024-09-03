import { useState,useEffect } from "react";


const Productos=()=>{

const [productos,setProductos]=useState([])
const [indice,setIndice]=useState(0)

const handleAnterior=()=>{
    if(indice==0){
        setIndice(productos.image.length -1)
    } else {
        setIndice(indice -1)
    }
}

const handleSiguiente=()=>{
    if(indice>= productos.image.length -1){
        setIndice(0)
    }else{
        setIndice(indice+1)
    }
}



console.log(productos)

useEffect( ()=>{

    getProductos()
},[])


    const getProductos=async()=>{


        let control= new AbortController()
        try{
            let respuesta= await fetch('https://fakestoreapi.com/products')
            let objJs= await respuesta.json()
            setProductos(objJs)
        }catch(error){console.log("menudo error",error)}
        finally{control.abort()}
    }



    return(
        <>
        
        <h2>Productos</h2>

        {productos.map((cosas,index)=>{

           
            
            return(
                <>
                <li key={cosas.id}><b>Producto:</b>{cosas.title}</li>
                <img className="img" src={cosas.image} alt={cosas.title} />
                <>
 
        </>
    
                </>
            )
        })}
        
        </>
    )
}


export default Productos