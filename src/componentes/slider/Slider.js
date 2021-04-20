import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Slider.css";
import { IconButton } from "@material-ui/core";

function Slider(props) {
  const [pagina, setPagina] = useState(0);
  const imagensPorPagina = parseInt(window.innerWidth / 216);

  return (
    <div>
      <h2>Slider</h2>
      <div className="container-img">
        <IconButton
          style={{ borderRadius: "0%" }}
          title="Página anterior"
          onClick={() => (pagina > 0 ? setPagina(pagina - 1) : null)}
        >
          <ArrowBackIosIcon />
        </IconButton>
        {props.imagens
          ?.slice(pagina * imagensPorPagina, (pagina + 1) * imagensPorPagina)
          ?.map((imagem) => {
            return (
              <img
                className="img-slider"
                role="img-slider"
                src={imagem}
                data-test
              ></img>
            );
          })}
        <IconButton
          style={{ borderRadius: "0%" }}
          title="Próxima página"
          onClick={() => setPagina(pagina + 1)}
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </IconButton>
      </div>
      <p>{pagina}</p>
    </div>
  );
}

export default Slider;
