import { render, screen, fireEvent } from "@testing-library/react";
import Slider from "./Slider";
import imgGaleria1 from "../../images/imagem1.jpg";
import imgGaleria2 from "../../images/imagem2.jpg";
import imgGaleria3 from "../../images/imagem3.jpg";
import imgGaleria4 from "../../images/imagem4.jpg";
import imgGaleria5 from "../../images/imagem4.jpg";

describe("Slider", () => {
  global.innerWidth = 1056;

  test("Slider deve renderizar com título passado pela props e na página inicial", () => {
    render(<Slider titulo="Galeria de Imagens" imagens={[imgGaleria1]} />);

    const sliderTitulo = screen.getByText("Galeria de Imagens");
    expect(sliderTitulo).toBeInTheDocument();

    const paginaAtual = screen.getByTitle("Slider de imagens página 1");
    expect(paginaAtual).toBeInTheDocument();
  });

  test("Slider não deve voltar de página ao clicar no botão pagina anterior se a página atual for a página inicial", () => {
    render(<Slider imagens={[imgGaleria1]} />);

    let paginaAtual = screen.getByTitle("Slider de imagens página 1");
    expect(paginaAtual).toBeInTheDocument();

    fireEvent.click(screen.getByTitle("Página anterior"));
    paginaAtual = screen.getByTitle("Slider de imagens página 1");
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

    let paginaAtual = screen.getByTitle("Slider de imagens página 1");
    expect(paginaAtual).toBeInTheDocument();

    fireEvent.click(screen.getByTitle("Próxima página"));
    paginaAtual = screen.getByTitle("Slider de imagens página 1");
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

    let contador = screen.getAllByTitle("Slider de imagens página", {
      exact: false,
    });
    expect(contador).toHaveLength(2);
  });
});
