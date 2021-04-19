function Experiencia(props){
    return (
    <div>
        <img src={props.img} alt={props.imgAlt}/>
        <h3>{props.titulo}</h3>
        <p>
            {props.descricao}
        </p>
    </div>
    )
}

export default Experiencia;