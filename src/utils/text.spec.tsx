import React from 'react';
import { capitalize, formatPrice } from './text';

const text = 'aleluya';
const textCapitalize = 'Aleluya';
const text2 = 'CEIBA SOFTWARE';
const text2Capitalize = 'Ceiba Software';

describe('utils/text tests', () => {
  it('should format price', () => {
    const price = formatPrice('15000');
    const price2 = formatPrice('100');
    expect(price).toMatch('$\xa015.000,00');
    expect(price2).toMatch('$\xa0100,00');
  });

  it('should format capitalize text', () => {
    const capitalized1 = capitalize(text);
    const capitalized2 = capitalize(text2);
    expect(capitalized1).toEqual(textCapitalize);
    expect(capitalized2).toEqual(text2Capitalize);
  });
});
