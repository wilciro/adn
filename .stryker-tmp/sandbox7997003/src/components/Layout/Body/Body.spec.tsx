// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { Body } from './style';
import LayoutBody from '.';

describe('Body tests', () => {
  it('should match style', () => {
    const { container } = render(<Body dark={false}>Ceiba</Body>);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Body', () => {
    const { container } = render(<LayoutBody>Ceiba software 2022</LayoutBody>);

    expect(container).toHaveTextContent('Ceiba software 2022');
  });
});
