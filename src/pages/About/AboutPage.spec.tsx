import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from '.';
import { AboutDiv } from './style';

describe('AboutPage tests', () => {
  it('should match style', () => {
    const { container } = render(<AboutDiv>Ceiba</AboutDiv>);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot AboutPage', () => {
    const { container } = render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
