import { useContext, useRef } from "react"
import { ContextFoto } from "../../contextFoto/ContextFoto"
import './Search.css'


export function Search(){
    
    const {searchInput, fetchImages, setPage, div}= useContext(ContextFoto)
    
   

    function resetSearch(){
        setPage(1)
        fetchImages()
    }
  
    function handleSearch(e){
        e.preventDefault()
        window.scrollTo({top: 620, behavior: "smooth"  })
        resetSearch()

    }


    function handleSelection(selection, elemRef){
        searchInput.current.value = selection
        window.scrollTo({top: elemRef.current.offsetTop, behavior: "smooth"  })
        
        resetSearch()
    }

    return(
        <div className="container_search">
            <section className="search_section">
                <form onSubmit={handleSearch}>
                    <input 
                        type="search"
                        placeholder="Pesquise por um tema..."    
                        className="search_input"
                        ref={searchInput}
                    />
                
                   
                </form>

            </section>

            <p> Temas mais pesquisados:</p>
            <section className="filters">

                <div  onClick={() => handleSelection('natureza', div)} > <span> Natureza </span></div>
                <div onClick={() => handleSelection('decoração', div)}> <span> Decoração </span></div>
                <div onClick={() => handleSelection('cachorros', div)}> <span> Cachorros</span></div>
                <div onClick={() =>handleSelection('sapatos', div) }> <span> Sapatos </span> </div>
            </section>  
        </div>


    )
}