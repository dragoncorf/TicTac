import Link from "next/link";
import { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <div>
      <div className="saludo">
        Hello! Bienvenido a mi juego de Tic Tac Toe ingresa aquí para jugar:
      </div>
      <div className="enlacesIndex">
        <p>
          <Link href="/jugar">
            <a>Normal</a>
          </Link>
        </p>
        <p>
          <Link href="/jugarHook">
            <a>Hooks</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;