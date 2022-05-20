import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SessionProvider } from 'context/SessionContext';
import * as sessionService from '../../services/sessionService';
import CustomRoutes from '.';

describe('CustomRoutes tests', () => {
  it('should match snapshot CustomRoutes', () => {
    const { container } = render(
      <SessionProvider>
        <BrowserRouter>
          <CustomRoutes />
        </BrowserRouter>
      </SessionProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match login routes', () => {
    sessionService.createSession('admin');
    const { container } = render(
      <SessionProvider>
        <BrowserRouter>
          <CustomRoutes />
        </BrowserRouter>
      </SessionProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
