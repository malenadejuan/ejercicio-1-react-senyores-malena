import { useState } from "react";
import senyores from "./apuntan";

function App() {
  const [marcarTodos, setMarcarTodos] = useState(false);
  const accionMarcar = () => {
    setMarcarTodos(true);
    senyores.forEach(senyor => senyor.marcado = true);
  };
  const [sumarSenyor, setSumarSenyor] = useState(0);
  const cuantosSenyores = (quien) => {
    if (quien.marcado === false) {
      setSumarSenyor(sumarSenyor + 1);
      quien.marcado = true;
    } else {
      quien.marcado = false;
      setSumarSenyor(sumarSenyor - 1);
    }
  };
  const tarjetas = senyores.map(senyor => <article key={senyor.id} className="senyor" onClick={() => cuantosSenyores(senyor)}>
    <div className="avatar">
      {senyor.marcado ?
        <img className="img-marcada" src={senyor.foto} alt={senyor.nombre + " señalándote con el dedo"} />
        : <img src={senyor.foto} alt={senyor.nombre + " señalándote con el dedo"} />}
      <span className="inicial">{senyor.nombre.charAt(0)}</span>
    </div>
    <div className="info">
      <h2>{senyor.nombre}</h2>
      <ul>
        <li><span className="etiqueta">Profesión:</span>{senyor.profesion}</li>
        <li><span className="etiqueta">Estado:</span>{senyor.estado}</li>
        <li><span className="etiqueta">Twitter:</span>{senyor.twitter}</li>
      </ul>
    </div>
    {senyor.marcado ? <i className="icono-marcado fas fa-check"></i> : <i className="icono fas fa-check"></i>}
  </article >);
  return (
    <div className="contenedor">
      <header className="cabecera">
        <h1>Señores que te apuntan con el dedo</h1>
        <p className="totales"><span className="nmarcados">{sumarSenyor}</span> señores que te apuntan con el dedo marcados</p>
        <a className="accion-marcar" href="marcar-todos" onClick={accionMarcar}>Marcar todos</a>
      </header>
      <main>
        {tarjetas}
      </main>
    </div>
  );
}

export default App;
