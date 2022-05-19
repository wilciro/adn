import React from 'react';
import { capitalize, formatPrice } from './text';

describe('utils/text tests', () => {
  it('should format price', () => {
    const price = formatPrice('15000');
    const price2 = formatPrice('100');
    expect(price).toMatch('$\xa015.000,00');
    expect(price2).toMatch('$\xa0100,00');
  });

  it('should format capitalize text', () => {
    const text1 = capitalize('aleluya');
    const text2 = capitalize('CEIBA SOFTWARE');
    expect(text1).toEqual('Aleluya');
    expect(text2).toEqual('Ceiba Software');
  });
});
