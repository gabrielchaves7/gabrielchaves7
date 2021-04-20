import { render, screen, fireEvent } from "@testing-library/react";
import Slider from "./Slider";
import imgGaleria1 from "../../images/galeriaImagens1.jpg";
import imgGaleria2 from "../../images/galeriaImagens2.JPG";
import imgGaleria3 from "../../images/galeriaImagens3.jpg";
import imgGaleria4 from "../../images/galeriaImagens4.jpg";
import imgGaleria5 from "../../images/galeriaImagens4.jpg";

describe("Slider", () => {
  global.innerWidth = 864;

  test("Slider deve renderizar com título e na página inicial", () => {
    render(<Slider />);

    const sliderTitulo = screen.getByText("Slider");
    expect(sliderTitulo).toBeInTheDocument();

    const paginaAtual = screen.getByText("0");
    expect(paginaAtual).toBeInTheDocument();
  });

  test("Slider deve avançar de página ao clicar no botão proxima pagina", () => {
    render(<Slider />);

    fireEvent.click(screen.getByTitle("Próxima página"));
    const paginaAtual = screen.getByText("1");
    expect(paginaAtual).toBeInTheDocument();
  });

  test("Slider deve voltar de página ao clicar no botão pagina anterior", () => {
    render(<Slider />);

    let paginaAtual = screen.getByText("0");
    expect(paginaAtual).toBeInTheDocument();

    fireEvent.click(screen.getByTitle("Próxima página"));
    paginaAtual = screen.getByText("1");
    expect(paginaAtual).toBeInTheDocument();

    fireEvent.click(screen.getByTitle("Página anterior"));
    paginaAtual = screen.getByText("0");
    expect(paginaAtual).toBeInTheDocument();
  });

  test("Slider não deve voltar de página ao clicar no botão pagina anterior se a página atual for a página inicial", () => {
    render(<Slider />);

    let paginaAtual = screen.getByText("0");
    expect(paginaAtual).toBeInTheDocument();

    fireEvent.click(screen.getByTitle("Página anterior"));
    paginaAtual = screen.getByText("0");
    expect(paginaAtual).toBeInTheDocument();
  });

  test("Slider deve exibir apenas 4 imagens por vez", () => {
    render(
      <Slider
        imagens={[
          imgGaleria1,
          imgGaleria2,
          imgGaleria3,
          imgGaleria4,
          imgGaleria5,
        ]}
      />
    );

    const imagens = screen.getAllByRole("img-slider");
    expect(imagens).toHaveLength(4);
  });

  test("Slider deve trocar imagens ao clicar em proxima pagina e pagina anterior", () => {
    render(
      <Slider
        imagens={[
          imgGaleria1,
          imgGaleria2,
          imgGaleria3,
          imgGaleria4,
          imgGaleria5,
        ]}
      />
    );

    let imagens = screen.getAllByRole("img-slider");
    expect(imagens).toHaveLength(4);

    fireEvent.click(screen.getByTitle("Próxima página"));
    imagens = screen.getAllByRole("img-slider");
    expect(imagens).toHaveLength(1);

    fireEvent.click(screen.getByTitle("Página anterior"));
    imagens = screen.getAllByRole("img-slider");
    expect(imagens).toHaveLength(4);
  });
});
