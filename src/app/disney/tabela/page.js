'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/app/services/apiDisney";
import { Table } from "react-bootstrap";

export default function Page() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {

            // let res = resultado.data.data
            // const a = res.sort(function(a,b) {
            //     if(a.name < b.name) return -1;
            //     if(a.name > b.name) return 1;
            //     return 0;
            // });

            // console.log(a);

            setPersonagens(resultado.data.data) 
        })
    }, [])

    return (
        <Pagina titulo="Disney Tabela">

            <Table className="mt-3" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map(item => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>
                                <img src={item.imageUrl} height={100} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>




        </Pagina>
    )
}
