import  './galeria.css'

import { useContext} from 'react'
import { ContextFoto } from '../../contextFoto/ContextFoto'


import { Fotos } from '../../components/Fotos/Fotos'
import { FotoAmpliada } from '../../components/FotoAmpliada/FotoAmpliada'
import { Search } from '../../components/Search/Search'
import { ButtonPages } from '../../components/ButtonPages/ButtonPages'

export function Galeria(){
    const {fotos, fotoAmpliada, error, loading, div} = useContext(ContextFoto)
    


    return(
        <div className='container_gallery'>    
            <main>             
                {error && <p className={error_msg}>  {error}</p>}
                        
                <section className='search_container'>
                <h1>Galeria de Fotos</h1>
                    <Search />
                </section>
               { loading ? <p>Carregando...</p> : (
               <section className='container_foto' ref={div}>
                    {fotos.map(foto => (
                        <div key={foto.id}>
                            <Fotos foto={foto.urls.small} />
                        </div>
                    ))}
                </section> )}
                
                <section className='foto_ampliada'>
                   { fotoAmpliada && <FotoAmpliada /> } 
                </section>

                <section>
                   <ButtonPages />
                </section>
            </main>

        </div>
    )
}