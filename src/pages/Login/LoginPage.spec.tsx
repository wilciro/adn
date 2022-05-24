import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import nock from 'nock';
import { BrowserRouter } from 'react-router-dom';
import routeData from 'react-router';
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
    waitFor(() => {
      expect(
        screen
          .getByTestId('login-btn')
          ?.classList?.contains('mantine-Button-loading'),
      ).toBe(true);
      expect(
        screen.getByText('Por favor ingrese el nombre de usuario'),
      ).toBeTruthy();
      expect(screen.getByText('Por favor ingrese la contraseña')).toBeTruthy();
    });
  });
  it('should login success', () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/user?username=admin&password=admin')
      .reply(200, [{ username: 'admin', password: 'admin' }], {
        'Access-Control-Allow-Origin': '*',
      });
    /* nock('').get('/dashboard').reply(200, [], {
      'Access-Control-Allow-Origin': '*',
    }); */
    const mockHistoryPush = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: mockHistoryPush,
      }),
    }));
    /* const mockLocation = {
      pathname: '/dashboard',
      hash: '',
      search: '',
      state: '',
      key: 'path',
    };
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation); */
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LoginPage />
        </SessionProvider>
      </BrowserRouter>,
    );
    fireEvent.change(screen.getByTestId('username'), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'admin' },
    });
    fireEvent.click(screen.getByTestId('login-btn'));
    waitFor(() => {
      expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });
});
