// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import RequestedList from '.';

describe('Requested List tests', () => {
  it('should match snapshot AboutPage', () => {
    const { container } = render(<RequestedList />);

    expect(container).toMatchSnapshot();
  });
});
