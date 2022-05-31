import React from 'react';
import {
  act,
  fireEvent,
  render,
  RenderOptions,
  screen,
  waitFor,
} from '@testing-library/react';
import { landingForm } from 'constants/forms/landing';
import { NotificationsProvider } from '@mantine/notifications';
import LandingPage from '.';

describe('LandingPage tests', () => {
  /* test('should match snapshot LandingPage', () => {
    const { container } = render(<LandingPage />);

    expect(container).toMatchSnapshot();
  }); */
  test('shouldnt register', async () => {
    // const { getByText } = render(<LandingPage />);
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(<LandingPage />, container);
    });

    await waitFor(() => {
      expect(screen.getByText('Nombre de la mascota')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId('register-btn'));
    expect(screen.getByText('Por favor ingrese el nombre')).toBeInTheDocument();
  });
  test('should register', async () => {
    const { container } = render(
      <NotificationsProvider>
        <LandingPage />
      </NotificationsProvider>,
    );
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
    fireEvent.click(screen.getByTestId('date'));
    fireEvent.click(
      container
        .getElementsByClassName('.mantine-DatePicker-calendarHeaderControl')
        .item(0) || screen.getByTestId('date'),
    );
    fireEvent.click(
      container.getElementsByClassName('.mantine-DatePicker-day').item(20) ||
        screen.getByTestId('date'),
    );

    fireEvent.click(screen.getByTestId('time'));
    fireEvent.change(
      container.getElementsByTagName('input').item(0) ||
        screen.getByTestId('date'),
      { target: { value: 10 } },
    );

    fireEvent.click(screen.getByTestId('register-btn'));
    // expect(screen.getByText('Nombre de la mascota')).toBeTruthy();
    /* await waitFor(() => {
      expect(
        screen.getByText('Petición realizada con éxito'),
      ).toBeInTheDocument();
    }); */
  });
});
