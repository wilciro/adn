import React from 'react';
import {
  act,
  fireEvent,
  render,
  RenderOptions,
  screen,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SessionContext, SessionProvider } from 'context/SessionContext';
import { Button } from '@mantine/core';
import CustomRoutes from '.';

describe('CustomRoutes tests', () => {
  const TestComponent = () => {
    const { mutations } = React.useContext(SessionContext);
    return (
      <MemoryRouter initialEntries={['/dashboard']}>
        <CustomRoutes />
        <Button
          data-testid="login"
          onClick={() => {
            mutations.setUsername('Juan');
          }}
        >
          login
        </Button>
        <Button
          data-testid="logout"
          onClick={() => {
            mutations.setUsername(undefined);
          }}
        >
          logout
        </Button>
      </MemoryRouter>
    );
  };

  test('should go to login', async () => {
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(
        <SessionProvider>
          <TestComponent />
        </SessionProvider>,
        container,
      );
    });
    expect(screen.getAllByTestId('title-login')).toHaveLength(1);
  });
  test('should match login routes', async () => {
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(
        <SessionProvider>
          <TestComponent />
        </SessionProvider>,
        container,
      );
    });
    fireEvent.click(screen.getByTestId('login'));
    await waitFor(() => {
      expect(screen.getAllByTestId('title-petitions-list')).toHaveLength(1);
    });
  });
});
