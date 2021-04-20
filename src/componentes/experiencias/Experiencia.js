import "./Experiencia.css";

function Experiencia(props) {
  return (
    <div>
      <div className="container">
        <img className="img-experiencia" src={props.img} alt={props.imgAlt} />
        <div className="div-detalhes-experiencia">
          <h3>{props.titulo}</h3>
          <p>{props.descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
