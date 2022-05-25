import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('should match snapshot App', () => {
    const { container } = render(<App />);

    expect(screen.getAllByTestId('header-landing')).toHaveLength(1);
  });
});
