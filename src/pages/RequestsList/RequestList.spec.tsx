import React from 'react';
import {
  act,
  render,
  RenderOptions,
  screen,
  waitFor,
} from '@testing-library/react';
import nock from 'nock';
import RequestedList from '.';

describe('Requested List tests', () => {
  /* test('should match snapshot RequestList', async () => {
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(<RequestedList />, container);
    });

    expect(container).toMatchSnapshot();
  }); */
  test('should match title RequestList', async () => {
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(<RequestedList />, container);
    });

    expect(screen.getByTestId('title-petitions-list')).toHaveTextContent(
      'Lista de citas',
    );
  });
  test('should match element in table RequestList', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/requests')
      .reply(
        200,
        [
          {
            owner_document: '1097040584',
            owner_name: 'Wilfer Daniel Ciro Maya',
            pet_name: 'Ciri',
            pet_type: 'gato',
            pet_age: 1,
            date: '2022-05-23',
            time: '15:20',
            price: 50000,
          },
        ],
        {
          'Access-Control-Allow-Origin': '*',
        },
      );
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(<RequestedList />, container);
    });
    await waitFor(() => {
      expect(screen.getByText('Wilfer Daniel Ciro Maya')).toBeInTheDocument();
    });
    expect(screen.getAllByTestId('table-row')).toHaveLength(1);
    expect(screen.getByText('1097040584')).toBeInTheDocument();
    expect(screen.getByText('Ciri')).toBeInTheDocument();
    expect(screen.getByText('gato')).toBeInTheDocument();
    expect(screen.getByText('2022-05-23')).toBeInTheDocument();
    expect(screen.getByText('15:20')).toBeInTheDocument();
    expect(screen.getByText('$ 50.000,00')).toBeInTheDocument();
  });
});
