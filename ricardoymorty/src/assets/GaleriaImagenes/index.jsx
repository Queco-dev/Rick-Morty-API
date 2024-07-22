import { useState,useEffect } from "react";



const Galeria=()=>{

    //const {image}=fotos

    const [indice,setIndice]=useState(0)




    useEffect( ()=>{

        getImagenes()

    },[])




    const getImagenes=async()=>{

        const control= new AbortController()
        try{
            const response= await fetch("https://fakestoreapi.com/products")
            const objJs= await response.json()
            setIndice(objJs)
        }catch(error) {console.log("menudo error",error)}
        finally {control.abort()}

    
    }

    return(
        <>

  
       
                  
                

        
        </>
    )
}

export default Galeria