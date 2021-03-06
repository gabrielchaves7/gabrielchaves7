import "./App.css";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import Qualidade from "./componentes/qualidade/Qualidade";
import determinado from "./images/determinado.jpg";
import adaptativo from "./images/adaptativo.jpg";
import aprendeRapido from "./images/aprende-rapido.png";
import naruto from "./images/naruto.png";
import ExperienciasAnteriores from "./componentes/experiencias/ExperienciasAnteriores";
import Slider from "./componentes/slider/Slider";
import imgGaleria1 from "./images/imagem1.jpg";
import imgGaleria2 from "./images/imagem2.jpg";
import imgGaleria3 from "./images/imagem3.jpg";
import imgGaleria4 from "./images/imagem4.jpg";
import imgGaleria5 from "./images/imagem5.jpg";
import imgGaleria6 from "./images/imagem6.jpg";
import imgGaleria7 from "./images/imagem7.jpg";
import imgGaleria8 from "./images/imagem8.jpg";
import imgGaleria9 from "./images/imagem9.jpg";
import imgGaleria10 from "./images/imagem10.jpg";
import imgGaleria11 from "./images/imagem11.jpg";
import imgGaleria12 from "./images/imagem12.jpg";
import EntreEmContato from "./componentes/contato/EntreEmContato";

function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <Qualidade
        titulo="Determinado"
        img={determinado}
        imgAlt="Esquilo da Era do Gelo se segurando na ponta de uma montanha para não cair."
      ></Qualidade>
      <Qualidade
        titulo="Adaptativo"
        img={adaptativo}
        imgAlt="Camaleão verde."
      ></Qualidade>
      <Qualidade
        titulo="Aprendo rápido"
        img={aprendeRapido}
        imgAlt="Homem focado na tela de um notebook."
      ></Qualidade>
      <Qualidade
        titulo="Pareço o naruto"
        img={naruto}
        imgAlt="Personagem de um anime chamado Naruto."
      ></Qualidade>
      <ExperienciasAnteriores></ExperienciasAnteriores>
      <Slider
        titulo="Galeria de imagens"
        imagens={[
          imgGaleria1,
          imgGaleria2,
          imgGaleria3,
          imgGaleria4,
          imgGaleria5,
          imgGaleria6,
          imgGaleria7,
          imgGaleria8,
          imgGaleria9,
          imgGaleria10,
          imgGaleria11,
          imgGaleria12,
        ]}
      ></Slider>
      <EntreEmContato />
    </div>
  );
}

export default App;
