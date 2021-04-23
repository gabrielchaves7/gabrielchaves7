import Experiencia from "./Experiencia";
import imgNodejs from "../../images/nodejs.png";
import imgSql from "../../images/sql.png";
import imgCSharp from "../../images/csharp.png";
import imgHtml from "../../images/css.png";
import imgProgramador from "../../images/programador.png";
import "./ExperienciasAnteriores.css";

function ExperienciasAnteriores() {
  return (
    <div className="div-experiencias-anteriores">
      <h2 className="titulo-experiencias-anteriores">
        Experiências Anteriores
      </h2>
      <div className="div-img-experiencias">
        <div className="div-img-programador">
          <img
            className="img-programador"
            src={imgProgramador}
            alt="Homem programando."
          />
        </div>

        <div className="div-experiencias">
          <Experiencia
            titulo={NODE_JS.titulo}
            descricao={NODE_JS.descricao}
            img={NODE_JS.img}
            imgAlt={NODE_JS.imgAlt}
          />
          <Experiencia
            titulo={SQL.titulo}
            descricao={SQL.descricao}
            img={SQL.img}
            imgAlt={SQL.imgAlt}
          />
          <Experiencia
            titulo="C#"
            descricao={CSHARP.descricao}
            img={CSHARP.img}
            imgAlt={CSHARP.imgAlt}
          />
          <Experiencia
            titulo="HTML, CSS e Javascript"
            descricao={HTML.descricao}
            img={HTML.img}
            imgAlt={HTML.imgAlt}
          />
        </div>
      </div>
    </div>
  );
}

export const NODE_JS = {
  titulo: "Node Js",
  descricao:
    "Trabalhei em um script para a integração de dados MySql e Oracle. Por isso, tive contato com diversas bibliotecas, como knex, lodash e bluebird.",
  img: imgNodejs,
  imgAlt: "Logo da tecnologia node js",
};

export const SQL = {
  titulo: "SQL",
  descricao:
    "Durante o tempo em que trabalhei com NodeJs, também adquiri muito conhecimento em SQL, tendo que refazer querys que já existiam, e desenvolver novas para tabelas recém criadas.",
  img: imgSql,
  imgAlt: "Logo da linguagem SQL",
};

export const CSHARP = {
  titulo: "C#",
  descricao:
    "Implementação de novas demandas de um produto já existente em C#. Criei aplicações e telas do 0 utilizando o padrão MVC, domínio total do padrão MVC e de classes.",
  img: imgCSharp,
  imgAlt: "Logo da linguagem C sharp",
};

export const HTML = {
  titulo: "HTML, CSS e Javascript",
  descricao:
    "Ao trabalhar com o padrão MVC em C#, desenvolvi telas desde o começo e, por isso, tenho total domínio de HTML, CSS, bootstrap, jquery e javascript.",
  img: imgHtml,
  imgAlt: "Logo que mostra imagens das linguagens css html e javascript",
};

export default ExperienciasAnteriores;
