import "./Qualidade.css";

function Qualidade(props) {
  return (
    <div className="div-qualidade">
      <div className="linha-horizontal"></div>
      <div className="div-img-qualidade">
        <img
          src={props.img}
          className="img-qualidade"
          alt={props.imgAlt}
          title={props.titulo}
        />
      </div>
      <p className="titulo-qualidade" style={{display: 'none'}}>{props.titulo}</p>
    </div>
  );
}

export default Qualidade;
