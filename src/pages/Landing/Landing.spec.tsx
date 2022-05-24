import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { landingForm } from 'constants/forms/landing';
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
  it('should register', () => {
    const { container } = render(<LandingPage />);
    fireEvent.change(screen.getByTestId(landingForm[0].name), {
      target: { value: 'Wilfer' },
    });
    fireEvent.change(screen.getByTestId(landingForm[1].name), {
      target: { value: '123' },
    });
    fireEvent.change(screen.getByTestId(landingForm[2].name), {
      target: { value: 'Ciri' },
    });
    fireEvent.change(screen.getByTestId(landingForm[3].name), {
      target: { value: 15 },
    });
    fireEvent.click(screen.getByTestId('time'));
    fireEvent.change(
      container.getElementsByTagName('input').item(0) ||
        screen.getByTestId('date'),
      { target: { value: 10 } },
    );
    fireEvent.click(screen.getByTestId('register-btn'));
    expect(screen.getByText('Nombre de la mascota')).toBeTruthy();
  });
});
