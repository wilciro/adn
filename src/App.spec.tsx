import React from 'react';
import {
  act,
  fireEvent,
  render,
  RenderOptions,
  screen,
  waitFor,
} from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('should match snapshot App', async () => {
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(<App />, container);
    });

    expect(screen.getAllByTestId('header-landing')).toHaveLength(1);
  });
  test('should go to login', async () => {
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(<App />, container);
    });

    fireEvent.click(screen.getByTestId('header-login-link'));
    await waitFor(() => {
      expect(screen.getAllByTestId('title-login')).toHaveLength(1);
    });

    fireEvent.click(screen.getByTestId('link-to-about'));
    await waitFor(() => {
      expect(screen.getAllByTestId('about-header')).toHaveLength(1);
    });

    fireEvent.click(screen.getByTestId('go-landing-btn'));
    await waitFor(() => {
      expect(screen.getAllByTestId('header-landing')).toHaveLength(1);
    });
  });
});
