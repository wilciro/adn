import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import AboutPage from '.';
import { AboutDiv } from './style';

describe('AboutPage tests', () => {
  test('should match style', () => {
    const { container } = render(<AboutDiv>Ceiba</AboutDiv>);
    expect(container).toHaveTextContent('Ceiba');
  });
  test('should match snapshot AboutPage', () => {
    const { container } = render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('about-header')).toHaveTextContent(
      'Sobre Vet App',
    );
  });
  test('should go to landing', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<h2 data-testid="landing">Landing</h2>} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId('about-header')).toHaveTextContent(
      'Sobre Vet App',
    );
    fireEvent.click(screen.getByTestId('go-landing-btn'));
    await waitFor(() => {
      expect(screen.getByTestId('landing')).toBeInTheDocument();
    });
  });
});
