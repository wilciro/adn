import React from 'react';
import {
  act,
  render,
  RenderOptions,
  screen,
  waitFor,
} from '@testing-library/react';
import { requestListHeader } from 'constants/tables/request_list';
import nock from 'nock';
import { TableResponsive } from './styles';
import CustomTable from '.';

describe('CustomTable tests', () => {
  test('should match style', () => {
    const { container } = render(<TableResponsive>Table</TableResponsive>);
    expect(container).toHaveTextContent('Table');
  });
  test('should show local data', async () => {
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(
        <CustomTable
          header={requestListHeader}
          title="Hola mundo"
          endpoint="requests"
          rows={[
            {
              owner_document: '1097040584',
              owner_name: 'Wilfer Daniel Ciro Maya',
              pet_name: 'Ciri',
              pet_type: 'gato',
              pet_age: 1,
              date: '2022-05-23 02:00:00',
              price: 50000,
            },
          ]}
        />,
        container,
      );
    });
    await waitFor(() => {
      expect(screen.getByText('Wilfer Daniel Ciro Maya')).toBeInTheDocument();
    });
    expect(screen.getAllByTestId('table-row')).toHaveLength(1);
  });
  test('should get data from service', async () => {
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
            date: '2022-05-23 02:00:00',
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
      render(
        <CustomTable
          header={requestListHeader}
          title="Hola mundo"
          endpoint="requests"
        />,
        container,
      );
    });
    await waitFor(() => {
      expect(screen.getByText('Wilfer Daniel Ciro Maya')).toBeInTheDocument();
    });
    expect(screen.getAllByTestId('table-row')).toHaveLength(1);
  });

  test('should get empty from service', async () => {
    nock(`${process.env.REACT_APP_HOST}`).get('/requests').reply(200, [], {
      'Access-Control-Allow-Origin': '*',
    });
    let container: RenderOptions<
      typeof import('@testing-library/dom/types/queries'),
      HTMLElement,
      HTMLElement
    >;
    await act(async () => {
      render(
        <CustomTable
          header={requestListHeader}
          title="Hola mundo"
          endpoint="requests"
        />,
        container,
      );
    });
    await waitFor(() => {
      expect(screen.getByText('Hola mundo')).toBeInTheDocument();
      // expect(screen.getByTestId('table-row')).not.toBeInTheDocument();
    });
  });
});
