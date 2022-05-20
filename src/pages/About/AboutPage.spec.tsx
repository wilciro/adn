import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from '.';

describe('AboutPage tests', () => {
  it('should match snapshot AboutPage', () => {
    const { container } = render(<AboutPage />);

    expect(container).toHaveTextContent('Sobre Vet App');
  });
});
