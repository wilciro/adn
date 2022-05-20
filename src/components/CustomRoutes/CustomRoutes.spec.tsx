import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from '.';
import { SessionProvider } from 'context/SessionContext';

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
});
