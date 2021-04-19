import logo from './logo.svg';
import './App.css';
import Cabecalho from './componentes/cabecalho/Cabecalho';
import Qualidade from './componentes/qualidade/Qualidade';
import determinado from './images/determinado.jpg';
import adaptativo from './images/adaptativo.jpg';
import aprendeRapido from './images/aprende-rapido.png';
import naruto from './images/naruto.png';
import ExperienciasAnteriores from './componentes/experiencias/ExperienciasAnteriores';

function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <Qualidade titulo="Determinado" img={determinado} imgAlt="Esquilo da Era do Gelo se segurando na ponta de uma montanha para não cair."></Qualidade>
      <Qualidade titulo="Adaptativo" img={adaptativo} imgAlt="Camaleão verde."></Qualidade>
      <Qualidade titulo="Aprendo rápido" img={aprendeRapido} imgAlt="Homem focado na tela de um notebook."></Qualidade>
      <Qualidade titulo="Pareço o naruto" img={naruto} imgAlt="Personagem de um anime chamado Naruto."></Qualidade>
      <ExperienciasAnteriores></ExperienciasAnteriores>
    </div>
  );
}

export default App;
