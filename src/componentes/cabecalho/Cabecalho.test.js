import { render, screen } from '@testing-library/react';
import Cabecalho from './Cabecalho';




describe('Cabecalho', () => {
    test('cabecalho should have title and image with src = "/rosto.jpg" and alt = "Imagem de Gabriel Chaves"', () => {
        render(<Cabecalho />);
        const cabecalhoImg = screen.getByRole('img');
        const cabecalhoTexto = screen.getByText('Quem é Gabriel Chaves?');
        expect(cabecalhoImg).toHaveAttribute('src', 'rosto.jpeg');
        expect(cabecalhoImg).toHaveAttribute('alt', 'Imagem de Gabriel Chaves');
        expect(cabecalhoImg).toBeInTheDocument();
        expect(cabecalhoTexto).toBeInTheDocument();
      });
  });