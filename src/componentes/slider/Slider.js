import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Slider.css";
import { IconButton } from "@material-ui/core";

function Slider(props) {
  const [pagina, setPagina] = useState(1);
  const imagensPorPagina = parseInt(window.innerWidth / 216);
  const proximaPagina = () => {
    if (pagina * imagensPorPagina < props.imagens?.length) {
      setPagina(pagina + 1);
    }
  };

  return (
    <div>
      <h2>{props.titulo}</h2>
      <div className="container-img">
        <IconButton
          style={{ borderRadius: "0%" }}
          title="Página anterior"
          onClick={() => (pagina > 1 ? setPagina(pagina - 1) : null)}
        >
          <ArrowBackIosIcon />
        </IconButton>
        {props.imagens
          ?.slice((pagina - 1) * imagensPorPagina, pagina * imagensPorPagina)
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
          onClick={() => {
            proximaPagina();
          }}
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </IconButton>
      </div>
      <p>{pagina}</p>
    </div>
  );
}

export default Slider;
