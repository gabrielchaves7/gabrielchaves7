import rosto from '../../images/rosto.jpeg';
import './Cabecalho.css';

function Cabecalho(){
    return (
        <div>
            <h1 className="title-cabecalho">
                Quem é Gabriel Chaves?
            </h1>
            <div className='linha-horizontal'>

            </div>
            <img src={rosto} className="img-cabecalho" heigth="300" width="300" alt="Imagem de Gabriel Chaves"/>
        </div>        
    )
}

export default Cabecalho;