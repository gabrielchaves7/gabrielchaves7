import { render, screen } from "@testing-library/react";
import Qualidade from "./Qualidade";
import determinado from "../../images/determinado.jpg";

describe("Qualidade", () => {
  test("Qualidade deve renderizar titulo e imagem corretamente baseado na props", () => {
    let textoQualidade = "Determinado";
    let imgAlt =
      "Esquilo da Era do Gelo se segurando na ponta de uma montanha para não cair.";
    render(
      <Qualidade titulo={textoQualidade} img={determinado} imgAlt={imgAlt} />
    );
    const qualidadeImg = screen.getByRole("img");
    const qualidadeTexto = screen.getByTitle(textoQualidade);
    expect(qualidadeImg).toHaveAttribute("src", "determinado.jpg");
    expect(qualidadeImg).toHaveAttribute("alt", imgAlt, { exact: true });
    expect(qualidadeImg).toBeInTheDocument();
    expect(qualidadeTexto).toBeInTheDocument();
  });
});
