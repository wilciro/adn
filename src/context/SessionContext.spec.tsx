import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@mantine/core';
import { SessionContext, SessionProvider } from './SessionContext';

describe('App tests', () => {
  const TestComponent = () => {
    const { data, mutations } = React.useContext(SessionContext);
    return (
      <div>
        {data?.sessionId ? (
          <div data-testid="user">{data.username}</div>
        ) : (
          <div data-testid="user">ERROR</div>
        )}
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
      </div>
    );
  };

  it('should login', () => {
    const { container } = render(
      <SessionProvider>
        <TestComponent />
      </SessionProvider>,
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId('user')).toHaveTextContent('ERROR');
    fireEvent.click(screen.getByTestId('login'));
    expect(screen.getByTestId('user')).toHaveTextContent('Juan');
  });

  it('should logout', () => {
    const { container } = render(
      <SessionProvider>
        <TestComponent />
      </SessionProvider>,
    );
    expect(container).toMatchSnapshot();
    fireEvent.click(screen.getByTestId('logout'));
    expect(screen.getByTestId('user')).toHaveTextContent('ERROR');
  });
});
