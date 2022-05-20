// @ts-nocheck
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { BrowserRouter } from 'react-router-dom';
import * as sessionService from '../../../services/sessionService';
import { Header } from './style';
import LayoutHeader from '.';

describe('Header tests', () => {
  it('should match style', () => {
    const { container } = render(<Header>Ceiba</Header>);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Header', () => {
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LayoutHeader />
        </SessionProvider>
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should open menu', () => {
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
  it('should logout', () => {
    sessionService.createSession('admin');
    const { container } = render(
      <BrowserRouter>
        <SessionProvider>
          <LayoutHeader />
        </SessionProvider>
      </BrowserRouter>,
    );
    // btn-nav-menu
    fireEvent.click(screen.getByTestId('header-logout-link'));
  });
});
