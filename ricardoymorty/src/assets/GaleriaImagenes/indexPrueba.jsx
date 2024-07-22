import {useState} from "react"


const GaleriaImagenes=()=>{

    const [indice,setIndice]=useState(0)

    const iamgeList = [
          'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
         'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
         'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
      ];

      const handleAnterior=()=>{
        
        if(indice==0){
            setIndice(iamgeList.length -1)
        } else {
            setIndice( indice - 1) }

      }





      const handleSiguiente=()=>{
        if (indice >= iamgeList.length -1) {
        setIndice(0)
        }else {
            setIndice(indice+1)
        }

      }

      
      

    return(
        <>
        <img src={iamgeList[indice]} alt={iamgeList[indice]} /><br />
        <button onClick={handleSiguiente}>Siguiente</button>
        <button onClick={handleAnterior}>Anterior</button>
        </>
    )
}

export default GaleriaImagenes