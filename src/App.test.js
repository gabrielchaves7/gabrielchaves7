import { render, screen } from '@testing-library/react';
import determinado from './images/determinado.jpg';
import adaptativo from './images/adaptativo.jpg';
import aprendeRapido from './images/aprende-rapido.png';
import naruto from './images/naruto.png';
import App from './App';

describe('App', () => {
  test('App deve renderizar cabecalho com texto e imagem', () => {
      render(<App/> );
      const cabecalhoTexto = screen.getByText('Quem é Gabriel Chaves?');
      const cabecalhoImg = screen.getByAltText('Imagem de Gabriel Chaves');
      expect(cabecalhoTexto).toBeInTheDocument();
      expect(cabecalhoImg).toBeInTheDocument();
    });

    test('App deve renderizar qualidade determinado', () => {
      render(<App/> );
      const qualidadeTexto = screen.getByTitle('Determinado');
      const qualidadeImg = screen.getByAltText('Esquilo da Era do Gelo se segurando na ponta de uma montanha para não cair.');
      expect(qualidadeTexto).toBeInTheDocument();
      expect(qualidadeImg).toBeInTheDocument();
      expect(qualidadeImg).toHaveAttribute('src', determinado);
    });

    test('App deve renderizar qualidade adaptativo', () => {
      render(<App/> );
      const qualidadeTexto = screen.getByTitle('Adaptativo');
      const qualidadeImg = screen.getByAltText('Camaleão verde.');
      expect(qualidadeTexto).toBeInTheDocument();
      expect(qualidadeImg).toBeInTheDocument();
      expect(qualidadeImg).toHaveAttribute('src', adaptativo);
    });

    test('App deve renderizar qualidade aprende rápido', () => {
      render(<App/> );
      const qualidadeTexto = screen.getByTitle('Aprendo rápido');
      const qualidadeImg = screen.getByAltText('Homem focado na tela de um notebook.');
      expect(qualidadeTexto).toBeInTheDocument();
      expect(qualidadeImg).toBeInTheDocument();
      expect(qualidadeImg).toHaveAttribute('src', aprendeRapido);
    });

    test('App deve renderizar qualidade pareço o naruto', () => {
      render(<App/> );
      const qualidadeTexto = screen.getByTitle('Pareço o naruto');
      const qualidadeImg = screen.getByAltText('Personagem de um anime chamado Naruto.');
      expect(qualidadeTexto).toBeInTheDocument();
      expect(qualidadeImg).toBeInTheDocument();
      expect(qualidadeImg).toHaveAttribute('src', naruto);
    });

    test('App deve renderizar experiencias anteriores', () => {
      render(<App/> );
      const experienciaNode = screen.getByText('Node Js');
      const experienciaSql = screen.getByText('SQL');
      const experienciaCSharp = screen.getByText('C#');
      const experienciaHtml = screen.getByText('HTML, CSS e Javascript');
      expect(experienciaNode).toBeInTheDocument();
      expect(experienciaSql).toBeInTheDocument();
      expect(experienciaCSharp).toBeInTheDocument();
      expect(experienciaHtml).toBeInTheDocument();
    });
});
