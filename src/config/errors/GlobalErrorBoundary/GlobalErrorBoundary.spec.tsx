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
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot GlobalErrorBoundary', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <ErrorBoundary>
            <h2>Hola Mundo</h2>
          </ErrorBoundary>
        </SessionProvider>
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match hola mundo GlobalErrorBoundary', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <ErrorBoundary>
            <h2>Hola Mundo</h2>
          </ErrorBoundary>
        </SessionProvider>
      </BrowserRouter>,
    );

    expect(container).toHaveTextContent('Hola Mundo');
  });
  it('should match hola mundo GlobalErrorBoundary', () => {
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
