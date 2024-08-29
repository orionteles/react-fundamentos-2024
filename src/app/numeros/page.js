'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Page(){

    const [numero, setNumero] = useState(0)

    function subtrair(){
        setNumero(numero-1)
    }

    function somar(){
        setNumero(numero+1)
    }

    return (
        <Pagina titulo={"Números"}>
            <Button onClick={subtrair}> - </Button>
            <h1>{numero}</h1>
            <Button onClick={somar}> + </Button>
        </Pagina>
    )
}
