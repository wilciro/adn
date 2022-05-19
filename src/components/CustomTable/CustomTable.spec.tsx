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
      />,
    );

    expect(container.getElementsByTagName('caption')).toBeTruthy();
  });
});
