import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  test('should go to login', () => {
    const { container } = render(
      <SessionProvider>
        <TestComponent />
      </SessionProvider>,
    );
    expect(screen.getAllByTestId('title-login')).toHaveLength(1);
  });
  test('should match login routes', () => {
    waitFor(() => {
      const { container } = render(
        <SessionProvider>
          <TestComponent />
        </SessionProvider>,
      );
    });
    fireEvent.click(screen.getByTestId('login'));
    waitFor(() => {
      expect(screen.getAllByTestId('header-landing')).toHaveLength(1);
    });
  });
});
