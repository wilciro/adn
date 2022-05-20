// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  it('should match snapshot App', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
