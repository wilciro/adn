import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LandingPage from '.';

describe('AboutPage tests', () => {
  it('should match snapshot AboutPage', () => {
    const { container } = render(<LandingPage />);

    expect(container).toMatchSnapshot();
  });
  it('should register', () => {
    const { container } = render(<LandingPage />);

    fireEvent.click(screen.getByTestId('register-btn'));
    expect(screen.getByText('Nombre de la mascota')).toBeTruthy();
  });
});
