import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from '.';
import { AboutDiv } from './style';

describe('AboutPage tests', () => {
  test('should match style', () => {
    const { container } = render(<AboutDiv>Ceiba</AboutDiv>);
    expect(container).toHaveTextContent('Ceiba');
  });
  test('should match snapshot AboutPage', () => {
    const { container } = render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('about-header')).toHaveTextContent(
      'Sobre Vet App',
    );
  });
});
