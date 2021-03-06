import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './style';
import LayoutFooter from '.';

describe('Footer tests', () => {
  test('should match style', () => {
    const { container } = render(<Footer>Ceiba</Footer>);
    expect(container).toHaveTextContent('Ceiba');
  });
  test('should match snapshot Footer', () => {
    const { container } = render(<LayoutFooter />);

    expect(container).toHaveTextContent('Ceiba software 2022');
  });
});
