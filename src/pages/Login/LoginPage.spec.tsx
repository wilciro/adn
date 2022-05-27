import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import nock from 'nock';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { NotificationsProvider } from '@mantine/notifications';
import LoginPage from '.';

describe('LoginPage tests', () => {
  test('should have text', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LoginPage />
        </SessionProvider>
      </BrowserRouter>,
    );

    expect(container).toHaveTextContent('Inicio de sesión');
  });
  test('should show password error', async () => {
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
  test('should login success', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/user?username=admin&password=admin')
      .reply(200, [1], {
        'Access-Control-Allow-Origin': '*',
      });
    const { container } = render(
      <MemoryRouter>
        <SessionProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={<h2 data-testid="dashboard">Dashboard</h2>}
            />
          </Routes>
        </SessionProvider>
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByTestId('username'), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'admin' },
    });
    fireEvent.click(screen.getByTestId('login-btn'));
    expect(
      container.getElementsByClassName('mantine-Button-loading'),
    ).toHaveLength(1);
    await waitFor(() => {
      expect(screen.getByTestId('dashboard')).toBeInTheDocument();
    });
  });
  test('shouldnt login success', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/user?username=admin&password=admin')
      .reply(200, [], {
        'Access-Control-Allow-Origin': '*',
      });
    const { container } = render(
      <NotificationsProvider position="top-right">
        <MemoryRouter>
          <SessionProvider>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={<h2 data-testid="dashboard">Dashboard</h2>}
              />
            </Routes>
          </SessionProvider>
        </MemoryRouter>
      </NotificationsProvider>,
    );
    fireEvent.change(screen.getByTestId('username'), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'admin' },
    });
    fireEvent.click(screen.getByTestId('login-btn'));
    await waitFor(() => {
      expect(screen.getByText('Error al iniciar sesión')).toBeInTheDocument();
    });
  });
  test('shouldnt login success', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/user?username=admin&password=admin')
      .reply(500, [], {
        'Access-Control-Allow-Origin': '*',
      });
    const { container } = render(
      <NotificationsProvider position="top-right">
        <MemoryRouter>
          <SessionProvider>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={<h2 data-testid="dashboard">Dashboard</h2>}
              />
            </Routes>
          </SessionProvider>
        </MemoryRouter>
      </NotificationsProvider>,
    );
    fireEvent.change(screen.getByTestId('username'), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'admin' },
    });
    fireEvent.click(screen.getByTestId('login-btn'));
    await waitFor(() => {
      expect(
        screen.getByText('Ocurrió un error con el servidor'),
      ).toBeInTheDocument();
    });
  });
});
