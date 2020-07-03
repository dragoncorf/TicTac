import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello! Bienvenido a mi juego de Tic Tac Toe ingresa aquí para jugar:
      <p>
        <Link href="/jugar">
          <a>Aquí</a>
        </Link>
      </p>
    </div>
  );
}
