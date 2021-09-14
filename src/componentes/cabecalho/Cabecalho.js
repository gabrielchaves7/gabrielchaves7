import rosto from "../../images/rosto.jfif";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <div className="div-cabecalho">
      <div className="div-titulo-cabecalho">
        <h1 className="title-cabecalho">Quem é Gabriel Chaves?</h1>
      </div>

      <div className="linha-horizontal"></div>
      <div>
        <img
          src={rosto}
          className="img-cabecalho"
          heigth="300"
          width="300"
          alt="Imagem de Gabriel Chaves"
        />
      </div>
    </div>
  );
}

export default Cabecalho;
