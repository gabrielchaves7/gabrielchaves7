import { render, screen } from "@testing-library/react";
import ExperienciasAnteriores, {
  NODE_JS,
  SQL,
  CSHARP,
  HTML,
} from "./ExperienciasAnteriores";
import nodejs from "../../images/nodejs.png";

describe("ExperienciasAnteriores", () => {
  test("ExperienciasAnteriores deve renderizar titulo", () => {
    render(<ExperienciasAnteriores />);
    const experienciasAnterioresTitulo = screen.getByText(
      "Experiências Anteriores"
    );
    expect(experienciasAnterioresTitulo).toBeInTheDocument();
  });

  test("ExperienciasAnteriores deve conter experiencia node", () => {
    render(<ExperienciasAnteriores />);

    const experienciaTitulo = screen.getByText(NODE_JS.titulo);
    expect(experienciaTitulo).toBeInTheDocument();

    const experienciaDescricao = screen.getByText(NODE_JS.descricao);
    expect(experienciaDescricao).toBeInTheDocument();

    const experienciaImg = screen.getByAltText(NODE_JS.imgAlt);
    expect(experienciaImg).toBeInTheDocument();
  });

  test("ExperienciasAnteriores deve conter experiencia SQL", () => {
    render(<ExperienciasAnteriores />);

    const experienciaTitulo = screen.getByText(SQL.titulo);
    expect(experienciaTitulo).toBeInTheDocument();

    const experienciaDescricao = screen.getByText(SQL.descricao);
    expect(experienciaDescricao).toBeInTheDocument();

    const experienciaImg = screen.getByAltText(SQL.imgAlt);
    expect(experienciaImg).toBeInTheDocument();
  });

  test("ExperienciasAnteriores deve conter experiencia C#", () => {
    render(<ExperienciasAnteriores />);

    const experienciaTitulo = screen.getByText(CSHARP.titulo);
    expect(experienciaTitulo).toBeInTheDocument();

    const experienciaDescricao = screen.getByText(CSHARP.descricao);
    expect(experienciaDescricao).toBeInTheDocument();

    const experienciaImg = screen.getByAltText(CSHARP.imgAlt);
    expect(experienciaImg).toBeInTheDocument();
  });

  test("ExperienciasAnteriores deve conter experiencia HTML, CSS e Javascript", () => {
    render(<ExperienciasAnteriores />);

    const experienciaTitulo = screen.getByText(HTML.titulo);
    expect(experienciaTitulo).toBeInTheDocument();

    const experienciaDescricao = screen.getByText(HTML.descricao);
    expect(experienciaDescricao).toBeInTheDocument();

    const experienciaImg = screen.getByAltText(HTML.imgAlt);
    expect(experienciaImg).toBeInTheDocument();
  });
});
