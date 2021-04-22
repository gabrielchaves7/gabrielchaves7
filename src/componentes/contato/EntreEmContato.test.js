import { render, screen } from "@testing-library/react";
import EntreEmContato from "./EntreEmContato";

describe("EntreEmContato", () => {
  test("EntreEmContato deve renderizar imagem do github, linkedin e twitter", () => {
    render(<EntreEmContato />);
    const imagens = screen.getAllByRole("img");
    expect(imagens).toHaveLength(3);
  });
});
