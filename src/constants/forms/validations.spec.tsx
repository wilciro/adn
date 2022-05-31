import React from 'react';
import { validateFormLanding } from './landing';

describe('Form validation tests', () => {
  test('Lading validations', async () => {
    expect(validateFormLanding.date('')).toEqual('Por favor ingrese la fecha');
    expect(validateFormLanding.date('2021-02-05')).toEqual(null);

    expect(validateFormLanding.ownerName('')).toEqual(
      'Por favor ingrese el nombre del dueño',
    );
    expect(validateFormLanding.ownerName('Wilfer')).toEqual(null);

    expect(validateFormLanding.petName('')).toEqual(
      'Por favor ingrese el nombre',
    );
    expect(validateFormLanding.petName('Ciri')).toEqual(null);

    expect(validateFormLanding.ownerDocument('')).toEqual(
      'Por favor ingrese el documento',
    );
    expect(validateFormLanding.ownerDocument('111')).toEqual(null);

    expect(validateFormLanding.petAge(0)).toEqual(
      'Por favor ingrese una edad válida',
    );
    expect(validateFormLanding.petAge(51)).toEqual(
      'Por favor ingrese una edad válida',
    );
    expect(validateFormLanding.petAge(15)).toEqual(null);

    expect(validateFormLanding.petType('')).toEqual(
      'Por favor seleccione el tipo',
    );
    expect(validateFormLanding.petType('gato')).toEqual(null);

    expect(validateFormLanding.time(new Date('2020-05-05 18:00:00'))).toEqual(
      'El rango horario es de 8 am - 5 pm',
    );
    expect(validateFormLanding.time(new Date('2020-05-05 12:00:00'))).toEqual(
      null,
    );
  });
});
