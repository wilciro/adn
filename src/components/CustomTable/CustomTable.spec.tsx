import React from 'react';
import { render } from '@testing-library/react';
import { requestListHeader } from 'constants/tables/request_list';
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
});
