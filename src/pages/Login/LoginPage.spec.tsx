import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import nock from 'nock';
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
  /* it('should login success', () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/user?username=admin&password=admin')
      .reply(200, [{ username: 'admin', password: 'admin' }], {
        'Access-Control-Allow-Origin': '*',
      });
    nock('').get('/dashboard').reply(200, [], {
      'Access-Control-Allow-Origin': '*',
    });
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LoginPage />
        </SessionProvider>
      </BrowserRouter>,
    );
    fireEvent.change(screen.getByTestId('Nombre de usuario'), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByTestId('Contraseña'), {
      target: { value: 'admin' },
    });
    fireEvent.click(screen.getByTestId('login-btn'));
  }); */
});
