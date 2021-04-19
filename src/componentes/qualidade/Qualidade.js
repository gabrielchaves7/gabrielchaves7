import determinado from '../../images/determinado.jpg';
import './Qualidade.css';

function Qualidade(props){
    return (
        <div>
            <div className='div-img-qualidade'>
                <img src={props.img} className="img-qualidade" alt={props.imgAlt}/>
            </div>
            <h2>
                {props.titulo}
            </h2>
        </div>        
    )
}

export default Qualidade;