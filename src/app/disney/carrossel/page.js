'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/app/services/apiDisney";

export default function Page(){
    
    const [personagens, setPersonagens] = useState([])

    useEffect(()=>{
        apiDisney.get('character').then(resultado=>{
            setPersonagens(resultado.data.data)
        })
    }, [])
    
    return (
        <Pagina titulo="Disney Carrossel">
            
            {personagens.map(item => (
                <p>{item.name}</p>
            ))}

        </Pagina>
    )
}
