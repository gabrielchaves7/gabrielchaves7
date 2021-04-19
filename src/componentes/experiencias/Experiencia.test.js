import { render, screen } from '@testing-library/react';
import Experiencia from './Experiencia';
import nodejs from '../../images/nodejs.png';



describe('Experiencia', () => {
    test('Experiencia deve renderizar titulo e imagem corretamente baseado na props', () => {
        let textoExperiencia = 'Node Js';
        let imgAlt = 'Logo da tecnologia node js';
        let descricao = 'Descrição da tecnologia';
        render(<Experiencia titulo={textoExperiencia} img={nodejs} imgAlt={imgAlt} descricao={descricao}/> );
        
        const experienciaImg = screen.getByRole('img');
        expect(experienciaImg).toHaveAttribute('src', 'nodejs.png');
        expect(experienciaImg).toHaveAttribute('alt', imgAlt, {exact: true});    
        expect(experienciaImg).toBeInTheDocument();

        const descricaoTexto = screen.getByText(descricao);
        expect(descricaoTexto).toBeInTheDocument();
      });
  });