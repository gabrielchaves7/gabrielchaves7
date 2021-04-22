import "./EntreEmContato.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twiter.png";

function EntreEmContato() {
  return (
    <div>
      <img
        src={github}
        className="img-entre-em-contato"
      />
      <img
        src={linkedin}
        className="img-entre-em-contato"
      />
      <img
        src={twitter}
        className="img-entre-em-contato"
      />
    </div>
  );
}

export default EntreEmContato;
