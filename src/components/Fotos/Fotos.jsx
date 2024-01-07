import { useContext } from 'react'
import { ContextFoto } from "../../contextFoto/ContextFoto"
import './Fotos.css'

export function Fotos({foto}){
    const {setFotoAmpliada} = useContext(ContextFoto)

    return(
        <div className='card_foto' onClick={() => setFotoAmpliada(foto)}> 
            <img src={foto} alt={foto.alt_description} />               
        </div>
    )
}