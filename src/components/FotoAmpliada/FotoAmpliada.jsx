import { useContext } from "react"
import { ContextFoto } from "../../contextFoto/ContextFoto"
import './FotoAmpliada.css'

export function FotoAmpliada(){

    const {fotoAmpliada, setFotoAmpliada}= useContext(ContextFoto)

    console.log(fotoAmpliada)
    return(
        <div className="foto_ampliada_backdrop" onClick={()=> setFotoAmpliada(null)}>
            <div className="foto_ampliada_container">
                {fotoAmpliada && <img src={fotoAmpliada} alt={fotoAmpliada.alt_description} /> }
            </div>
        </div>
    )
}