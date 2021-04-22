import "./EntreEmContato.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twiter.png";

function EntreEmContato() {
  return (
    <div>
      <a href="https://github.com/gabrielchaves7">
        <img
          src={github}
          className="img-entre-em-contato"
          title="Logo do github que redireciona para https://github.com/gabrielchaves7"
        />
      </a>

      <a href="https://www.linkedin.com/in/gabriel-chaves-ferreira-ba0318169/">
        <img
          src={linkedin}
          className="img-entre-em-contato"
          title="Logo do linkedin que redireciona para https://www.linkedin.com/in/gabriel-chaves-ferreira-ba0318169/"
        />
      </a>
      <a href="https://twitter.com/ChavessKeys">
        <img
          src={twitter}
          className="img-entre-em-contato"
          title="Logo do twitter que redireciona para https://twitter.com/ChavessKeys"
        />
      </a>
    </div>
  );
}

export default EntreEmContato;
