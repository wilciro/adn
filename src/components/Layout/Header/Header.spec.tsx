import React from 'react';
import { render } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
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
});
