import { render, screen, fireEvent } from "@testing-library/react";
import Slider from "./Slider";
import imgGaleria1 from "../../images/galeriaImagens1.jpg";
import imgGaleria2 from "../../images/galeriaImagens2.JPG";
import imgGaleria3 from "../../images/galeriaImagens3.jpg";
import imgGaleria4 from "../../images/galeriaImagens4.jpg";
import imgGaleria5 from "../../images/galeriaImagens4.jpg";

describe("Slider", () => {
  global.innerWidth = 864;

  test("Slider deve renderizar com título passado pela props e na página inicial", () => {
    render(<Slider titulo="Galeria de Imagens" imagens={[]} />);

    const sliderTitulo = screen.getByText("Galeria de Imagens");
    expect(sliderTitulo).toBeInTheDocument();

    const paginaAtual = screen.getByText("1");
    expect(paginaAtual).toBeInTheDocument();
  });

  test("Slider não deve voltar de página ao clicar no botão pagina anterior se a página atual for a página inicial", () => {
    render(<Slider imagens={[]} />);

    let paginaAtual = screen.getByText("1");
    expect(paginaAtual).toBeInTheDocument();

    fireEvent.click(screen.getByTitle("Página anterior"));
    paginaAtual = screen.getByText("1");
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

  test("Slider não deve avançar de página ao clicar no botão próxima página se não houver mais imagens", () => {
    render(
      <Slider imagens={[imgGaleria1, imgGaleria2, imgGaleria3, imgGaleria4]} />
    );

    let paginaAtual = screen.getByText("1");
    expect(paginaAtual).toBeInTheDocument();

    fireEvent.click(screen.getByTitle("Próxima página"));
    paginaAtual = screen.getByText("1");
    expect(paginaAtual).toBeInTheDocument();
  });

  test("Slider deve exibir contador de páginas baseado no numero de imagens que cabem na tela", () => {
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

    let contador = screen.getAllByTitle("Numeração das imagens");
    expect(contador).toHaveLength(2);
  });
});
