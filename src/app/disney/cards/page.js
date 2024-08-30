'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/app/services/apiDisney";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function Page() {

    const [personagens, setPersonagens] = useState([])

    apiDisney.get('/character').then(resultado => {
        setPersonagens(resultado.data.data);
    })

    return (
        <Pagina titulo="Disney">

            <Row md={3}>
                {personagens.map(item => (
                    <Col key={item._id} >
                        <Card>
                            <Card.Img style={{ height: 250 }} variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Pagina>
    )
}
