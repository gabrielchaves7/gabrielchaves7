import { render, screen } from "@testing-library/react";
import EntreEmContato from "./EntreEmContato";

describe("EntreEmContato", () => {
  test("EntreEmContato deve renderizar titulo Entre em contato com imagem do github, linkedin e twitter", () => {
    render(<EntreEmContato />);

    const titulo = screen.getByText("Entre em contato");
    expect(titulo).toBeInTheDocument();

    const imagens = screen.getAllByRole("img");
    expect(imagens).toHaveLength(3);
  });

  test("EntreEmContato deve ter imagens com títulos descritivos do github, linkedin e twitter", () => {
    render(<EntreEmContato />);
    const tituloGithub = screen.getByTitle(
      "Logo do github que redireciona para https://github.com/gabrielchaves7"
    );
    const tituloLinkedin = screen.getByTitle(
      "Logo do linkedin que redireciona para https://www.linkedin.com/in/gabriel-chaves-ferreira-ba0318169/"
    );
    const tituloTwitter = screen.getByTitle(
      "Logo do twitter que redireciona para https://twitter.com/ChavessKeys"
    );
    expect(tituloGithub).toBeInTheDocument();
    expect(tituloLinkedin).toBeInTheDocument();
    expect(tituloTwitter).toBeInTheDocument();
  });

  test("Imagem do github deve ter href para https://github.com/gabrielchaves7", () => {
    render(<EntreEmContato />);
    const tituloGithub = screen.getByTitle(
      "Logo do github que redireciona para https://github.com/gabrielchaves7"
    );
    expect(tituloGithub.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/gabrielchaves7"
    );

    expect(tituloGithub.closest("a")).toHaveAttribute(
      "target",
      "_blank"
    );
  });

  test("Imagem do linkedin deve ter href para https://www.linkedin.com/in/gabriel-chaves-ferreira-ba0318169/", () => {
    render(<EntreEmContato />);
    const tituloLinkedin = screen.getByTitle(
      "Logo do linkedin que redireciona para https://www.linkedin.com/in/gabriel-chaves-ferreira-ba0318169/"
    );
    expect(tituloLinkedin.closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/gabriel-chaves-ferreira-ba0318169/"
    );
    expect(tituloLinkedin.closest("a")).toHaveAttribute(
      "target",
      "_blank"
    );
  });

  test("Imagem do twitter deve ter href para https://twitter.com/ChavessKeys", () => {
    render(<EntreEmContato />);
    const tituloTwitter = screen.getByTitle(
      "Logo do twitter que redireciona para https://twitter.com/ChavessKeys"
    );
    expect(tituloTwitter.closest("a")).toHaveAttribute(
      "href",
      "https://twitter.com/ChavessKeys"
    );
    expect(tituloTwitter.closest("a")).toHaveAttribute(
      "target",
      "_blank"
    );
  });
});
