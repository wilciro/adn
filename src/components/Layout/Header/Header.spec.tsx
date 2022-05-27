import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as sessionService from '../../../services/sessionService';
import { Header } from './style';
import LayoutHeader from '.';

describe('Header tests', () => {
  test('should match style', () => {
    const { container } = render(<Header>Ceiba</Header>);
    expect(container).toMatchSnapshot();
  });
  test('should match snapshot Header', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LayoutHeader />
        </SessionProvider>
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
  test('should open menu', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LayoutHeader />
        </SessionProvider>
      </BrowserRouter>,
    );
    // btn-nav-menu
    fireEvent.click(screen.getByTestId('btn-nav-menu'));
    expect(screen.getByTestId('nav-menu')).toHaveStyle(`display: flex`);
  });
  test('should logout', async () => {
    sessionService.createSession('admin');
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LayoutHeader />
          <Routes>
            <Route path="/login" element={<h2 data-testid="login">Login</h2>} />
            <Route path="/" element={<h2 data-testid="landing">Landing</h2>} />
          </Routes>
        </SessionProvider>
      </BrowserRouter>,
    );
    // btn-nav-menu
    fireEvent.click(screen.getByTestId('header-logout-link'));
    await waitFor(() => {
      expect(screen.getByTestId('login')).toBeInTheDocument();
    });
  });
});
