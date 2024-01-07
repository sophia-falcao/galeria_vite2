import { useContext, useRef } from "react"
import { ContextFoto } from "../../contextFoto/ContextFoto"
import './Search.css'


export function Search(){
    
    const {searchInput, fetchImages, setPage}= useContext(ContextFoto)
    
    function resetSearch(){
        setPage(1)
        fetchImages()
    }
  
    function handleSearch(e){
        e.preventDefault()
        resetSearch()

    }


    function handleSelection(selection){
        searchInput.current.value = selection
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

                <div  onClick={() => handleSelection('natureza')}> <span> Natureza </span></div>
                <div onClick={() => handleSelection('decoração')}> <span> Decoração </span></div>
                <div onClick={() => handleSelection('cachorros')}> <span> Cachorros</span></div>
                <div onClick={() =>handleSelection('sapatos') }> <span> Sapatos </span> </div>
            </section>  
        </div>


    )
}