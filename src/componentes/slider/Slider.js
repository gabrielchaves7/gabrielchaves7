import React, { useState, useLayoutEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Slider.css";
import { IconButton } from "@material-ui/core";

function Slider(props) {
  const [pagina, setPagina] = useState(1);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const tamanhoSetas = 96;
  let tamanhoMargem = window.innerWidth >= 999 ? 96 : 0;
  const [imagensPorPagina, setImagensPorPagina] = useState(
    parseInt((windowSize - (tamanhoSetas + tamanhoMargem)) / 216)
  );

  useLayoutEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      setWindowSize(window.innerWidth);
      let tamanhoMargem = window.innerWidth >= 999 ? 96 : 0;
      setImagensPorPagina(parseInt((window.innerWidth - (tamanhoSetas + tamanhoMargem)) / 216));
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const numeroImagens = props.imagens?.length;

  const proximaPagina = () => {
    if (pagina * imagensPorPagina < numeroImagens) {
      setPagina(pagina + 1);
    }
  };

  let numeroPaginas = parseInt(numeroImagens / imagensPorPagina);
  let sobrouImagens = numeroImagens % imagensPorPagina > 0;
  numeroPaginas = numeroPaginas + (sobrouImagens ? 1 : 0);

  return (
    <div className="div-slider">
      <h2>{props.titulo}</h2>
      <div className="container">
        <IconButton
          title="Página anterior"
          onClick={() => (pagina > 1 ? setPagina(pagina - 1) : null)}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <div className="container-img">
          {props.imagens
            ?.slice((pagina - 1) * imagensPorPagina, pagina * imagensPorPagina)
            ?.map((imagem) => {
              return (
                <img
                  key={imagem}
                  className="img-slider"
                  role="img-slider"
                  src={imagem}
                ></img>
              );
            })}
        </div>
        <IconButton
          title="Próxima página"
          onClick={() => {
            proximaPagina();
          }}
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </IconButton>
      </div>
      <div className="div-numeracao-slider">
        {[...Array(numeroPaginas)].map((it, index) => {
          return (
            <span
              key={`pagina-${index}`}
              title={`Slider de imagens página ${index + 1}`}
              className={`numeracao-slider ${
                index + 1 === pagina ? "selected" : ""
              }`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
