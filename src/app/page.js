'use client'
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <Pagina titulo="Página Inicial">
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho titulo="Orion" subtitulo="Agora" />
      <Cabecalho titulo="Frontend" />
      <Cabecalho titulo="Cabeçalho" />
      <Cabecalho titulo="React" />

      <Link href="/fundamentos">Página Fundamentos</Link><br />

    </Pagina>
  );
}
