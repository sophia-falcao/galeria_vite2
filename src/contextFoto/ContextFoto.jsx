import { createContext, useCallback, useEffect, useRef, useState } from "react";

import axios from "axios";


export const ContextFoto = createContext()

const API_URL= 'https://api.unsplash.com/search/photos'
const IMAGES_PER_PAGE = 20

export function ContextFotoProvider({children}){
   
    const searchInput = useRef(null)
    const [fotos, setFotos]= useState([])
    const [page, setPage]= useState(1)
    const [totalPage, setTotalPage]= useState(0)
    const [fotoAmpliada, setFotoAmpliada]= useState(null)
    const [error, setError]= useState('')
   
  
  
    const fetchImages = useCallback( async () => {
        try {
            if(searchInput.current.value){
                setError('')
                const {data} = await axios.get(`${API_URL}?query=${searchInput.current.value}
                &page=${page}&per_page=${IMAGES_PER_PAGE}
                &client_id=${import.meta.env.VITE_API_KEY 
                }`
                )
                setFotos(data.results)
                setTotalPage(data.total_pages)
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
                error
            }}> 
            {children}
        </ContextFoto.Provider>
    )
}