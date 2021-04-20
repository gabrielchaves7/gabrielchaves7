import "./Qualidade.css";

function Qualidade(props) {
  return (
    <div>
      <div className="linha-horizontal"></div>
      <div className="div-img-qualidade">
        <img
          src={props.img}
          className="img-qualidade"
          alt={props.imgAlt}
          title={props.titulo}
        />
      </div>
    </div>
  );
}

export default Qualidade;
