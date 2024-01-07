import { useContext, useEffect } from "react"
import { ContextFoto } from "../../contextFoto/ContextFoto"
import './BuutonPages.css'

export function ButtonPages(){

    const {page, setPage, totalPage, fetchImages} = useContext(ContextFoto)

    useEffect(() => {
        fetchImages()
    }, [fetchImages])

   
    return(
        <div className="container_button">
              {page > 1 && 
                        (<button onClick={() => setPage(page - 1)}> Anterior </button>
                    )}
                    
                    {page < totalPage && ( 
                        <button onClick={() => setPage(page + 1)}> Proxima </button> 
                    )}
        </div>
    )
}