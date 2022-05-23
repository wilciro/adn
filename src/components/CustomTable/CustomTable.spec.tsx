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
  it('should match style', () => {
    const { container } = render(<TableResponsive>Table</TableResponsive>);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot CustomTable', () => {
    const { container } = render(
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
    );

    expect(container.getElementsByTagName('caption')).toBeTruthy();
  });
  it('should get data from service', async () => {
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
    waitFor(() => {
      // expect(container.getElementsByTagName('caption')).toBeTruthy();
      // I'd look for a real text here that is renderer when the data loads
      expect(screen.getByText('Ciri')).toBeTruthy();
    });
  });

  it('should get empty from service', async () => {
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
    waitFor(() => {
      // expect(container.getElementsByTagName('caption')).toBeTruthy();
      // I'd look for a real text here that is renderer when the data loads
      expect(screen.getByText('Hola mundo')).toBeTruthy();
    });
  });
});
