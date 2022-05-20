import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '.';

describe('LoginPage tests', () => {
  it('should match snapshot LoginPage', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LoginPage />
        </SessionProvider>
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should have text', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LoginPage />
        </SessionProvider>
      </BrowserRouter>,
    );

    expect(container).toHaveTextContent('Inicio de sesión');
  });
  it('should show password error', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LoginPage />
        </SessionProvider>
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('login-btn'));
    expect(
      screen.getByText('Por favor ingrese el nombre de usuario'),
    ).toBeTruthy();
    expect(screen.getByText('Por favor ingrese la contraseña')).toBeTruthy();
  });
});
