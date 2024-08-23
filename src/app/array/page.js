'use client'

import Pagina from "../components/Pagina";

export default function Array() {

    const carros = ['Corsa', 'Celta', 'Ferrari', 'Fusca', 'Cobalt']

    return (
        <Pagina titulo="Página de Array">

            {carros.map(item => (
                <p>{item}</p>
            ))}

            <ul>
                {carros.map(item => (
                    <li>{item}</li>
                ))}
            </ul>

        </Pagina>
    )
}
