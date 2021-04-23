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
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "determinado.jpg");
    expect(img).toHaveAttribute("alt", imgAlt, { exact: true });
    expect(img).toBeInTheDocument();

    const imgTitulo = screen.getByTitle(textoQualidade);
    expect(imgTitulo).toBeInTheDocument();
  });

  test("Qualidade deve renderizar titulo em telas com mais de 659px", () => {
    global.innerWidth = 660;
    let textoQualidade = "Determinado";
    render(
      <Qualidade titulo={textoQualidade} img={determinado} />
    );

    const titulo = screen.getByText(textoQualidade);
    expect(titulo).toBeInTheDocument();
  });


  test("Qualidade não deve renderizar titulo em telas com menos de 659px", () => {
    global.innerWidth = 650;
    let textoQualidade = "Determinado";
    render(
      <Qualidade titulo={textoQualidade} img={determinado} />
    );

    const titulo = screen.getByText(textoQualidade);
    expect(titulo).not.toBeVisible();
  });
});
