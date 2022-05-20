import React from 'react';
import { render } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { BrowserRouter } from 'react-router-dom';
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
});
