import React, { useState } from "react";
import "./Slider.css";

function Slider(props) {
  const [pagina, setPagina] = useState(0);
  const imagensPorPagina = parseInt(window.innerWidth / 216);

  return (
    <div>
      <h2>Slider</h2>
      <div className="container-img">
        {props.imagens
          ?.slice(pagina * imagensPorPagina, (pagina + 1) * imagensPorPagina)
          ?.map((imagem) => {
            return <img className="img-slider" src={imagem}></img>;
          })}
        <button
          className="btn-pagina-anterior"
          onClick={() => (pagina > 0 ? setPagina(pagina - 1) : null)}
        >
          Pagina anterior
        </button>
        <button
          className="btn-proxima-pagina"
          onClick={() => setPagina(pagina + 1)}
        >
          Proxima pagina
        </button>
      </div>
      <p>{pagina}</p>
    </div>
  );
}

export default Slider;
