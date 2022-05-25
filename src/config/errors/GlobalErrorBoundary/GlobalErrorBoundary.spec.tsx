import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '@mantine/core';
import { Container } from './style';
import ErrorBoundary from '.';

describe('GlobalErrorBoundary tests', () => {
  it('should match style', () => {
    const { container } = render(<Container>Ceiba</Container>);
    expect(container).toHaveTextContent('Ceiba');
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot GlobalErrorBoundary', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <ErrorBoundary>
            <h2 data-testid='about-header'>Hola Mundo</h2>
          </ErrorBoundary>
        </SessionProvider>
      </BrowserRouter>,
    );

    expect(screen.getByTestId('about-header')).toHaveTextContent('Hola Mundo');
    expect(container).toMatchSnapshot();
  });
  it('should match error message', () => {
    const Child = () => {
      throw new Error();
    };
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <ErrorBoundary>
            <Child />
          </ErrorBoundary>
        </SessionProvider>
      </BrowserRouter>,
    );
    // fireEvent.click(screen.getByTestId('test-button'));

    expect(container).toHaveTextContent(
      '¡Ups! Ocurrió un error mientras navegabas',
    );
  });
});
