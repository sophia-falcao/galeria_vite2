import styles from './galeria.module.css'

import { useContext } from 'react'
import { ContextFoto } from '../../contextFoto/ContextFoto'


import { Fotos } from '../../components/Fotos/Fotos'
import { FotoAmpliada } from '../../components/FotoAmpliada/FotoAmpliada'
import { Search } from '../../components/Search/Search'
import { ButtonPages } from '../../components/ButtonPages/ButtonPages'

export function Galeria(){
    const {fotos, fotoAmpliada, error} = useContext(ContextFoto)
    
    return(
        <div className={styles.container_gallery}>
           
            <main>
                
                {error && <p className={styles.error_msg}>  {error}</p>}
               
                <section className={styles.search_container}>
                 <h1>Galeria de Fotos</h1>
                    <Search />
                 </section>
                <section className={styles.container_foto}>
                    {fotos.map(foto => (
                        <div key={foto.id}>
                            <Fotos foto={foto.urls.small}/>
                        </div>
                    ))}
                </section>
                
                <section className={styles.foto_ampliada}>
                   { fotoAmpliada && <FotoAmpliada /> } 
                </section>

                <section>
                   <ButtonPages />
                </section>
            </main>

        </div>
    )
}
