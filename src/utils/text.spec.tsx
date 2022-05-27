import React from 'react';
import { capitalize, formatPrice } from './text';

describe('utils/text tests', () => {
  it('should format price', () => {
    expect(formatPrice('15000')).toEqual('$\xa015.000,00');
    expect(formatPrice('100')).toEqual('$\xa0100,00');
    expect(formatPrice('0')).toEqual('$\xa00,00');
    expect(formatPrice('ABC')).toEqual('$\xa0NaN');
    expect(formatPrice('-50000')).toEqual('-$\xa050.000,00');
  });

  it('should format capitalize text', () => {
    expect(capitalize('ceiba software')).toEqual('Ceiba Software');
    expect(capitalize('CEIBA SOFTWARE')).toEqual('Ceiba Software');
    expect(capitalize('CEIBA software')).toEqual('Ceiba Software');
    expect(capitalize('cEIBA sOFTWARE')).toEqual('Ceiba Software');
    expect(capitalize('Ceiba Software')).toEqual('Ceiba Software');
    expect(capitalize('555')).toEqual('555');
  });
});
