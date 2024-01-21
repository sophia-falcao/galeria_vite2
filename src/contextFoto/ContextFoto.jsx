import { createContext, useCallback, useEffect, useRef, useState } from "react";

import axios from "axios";


export const ContextFoto = createContext()

const API_URL= 'https://api.unsplash.com/search/photos'
const IMAGES_PER_PAGE = 20

export function ContextFotoProvider({children}){
    
    const div = useRef(null)
    const searchInput = useRef(null)
    const [input, setInput]= useState('')
   
    const [fotos, setFotos]= useState([])
    const [fotoAmpliada, setFotoAmpliada]= useState(null)
   
    const [page, setPage]= useState(1)
    const [totalPage, setTotalPage]= useState(0)
 
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState('')
   
  
  
    const fetchImages = useCallback( async () => {
        try {
            setLoading(true)
            if(searchInput.current.value){
                setError('')
                const {data} = await axios.get(`${API_URL}?query=${searchInput.current.value}
                &page=${page}&per_page=${IMAGES_PER_PAGE}
                &client_id=${import.meta.env.VITE_API_KEY 
                }`
                )
                setFotos(data.results)
                setTotalPage(data.total_pages)
                setLoading(false)
            }
            
        } catch (error) {
            setError('Houve um erro ao carregar as imagens!')
        }
    }, [page])

 

    return(
        <ContextFoto.Provider value={
            {
                fotos,
                fotoAmpliada,
                setFotoAmpliada,
                searchInput,
                fetchImages,
                totalPage,
                page,
                setPage,
                error,
                div
               
              
            }}> 
            {children}
        </ContextFoto.Provider>
    )
}