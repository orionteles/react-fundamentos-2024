'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Page(){

    const [nome, setNome] = useState('Orion')

    function alterarNome(){
        const novoNome = nome == 'Orion' ? 'Orion Teles de Mesquita' : 'Orion'
        setNome(novoNome)
    }

    return (
        <Pagina titulo={"Nomes: " + nome}>
            <h1>{nome}</h1>
            <Button onClick={alterarNome}>Alterar Nome</Button>
        </Pagina>
    )
}
