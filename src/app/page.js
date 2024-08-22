import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho titulo="Orion" subtitulo="Agora" />
      <Cabecalho titulo="Frontend" />
      <Cabecalho titulo="Cabeçalho" />
      <Cabecalho titulo="React" />

      <Link href="/fundamentos">Página Fundamentos</Link><br />

    </main>
  );
}
