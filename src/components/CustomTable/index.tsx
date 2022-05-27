// React
import React, { useEffect, useState } from 'react';

// Mantine
import { Table } from '@mantine/core';
import { getTableData } from 'services/tableService';
import { TableResponsive } from './styles';

export interface HeaderModel {
  label: string;
  row: string;
  format?: (row: string) => string;
}

export interface CustomTableProps {
  header: Array<HeaderModel>;
  title: string;
  endpoint: string;
  rows?: Array<object>;
}

const CustomTable: React.FC<CustomTableProps> = ({
  header,
  title,
  endpoint,
  rows = [],
}) => {
  const [rowsData, setRowsData] = useState<Array<object>>(rows);

  const getData = async () => {
    if (endpoint.length > 0) {
      const data = await getTableData(endpoint);
      if (data.valid) {
        setRowsData(data.data || []);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const ths = header.map((item: HeaderModel, index: number) => (
    <th key={`header-${item.row}`}>{item.label}</th>
  ));

  return (
    <TableResponsive>
      <Table striped highlightOnHover data-testid="table">
        <caption>{title}</caption>
        <thead>
          <tr>{ths}</tr>
        </thead>
        <tbody>
          {rowsData.map((row: object, index: number) => {
            return (
              <tr key={`column-${index}`} data-testid="table-row">
                {header.map((itemH: HeaderModel, iHead: number) => {
                  if (itemH.format) {
                    return (
                      <td key={`${index}-${iHead}`}>
                        {itemH.format(
                          itemH.row in row
                            ? row[itemH.row as keyof typeof row]
                            : '',
                        )}
                      </td>
                    );
                  }
                  return (
                    <td key={`${index}-${iHead}`}>
                      {itemH.row in row
                        ? row[itemH.row as keyof typeof row]
                        : ''}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableResponsive>
  );
};

CustomTable.defaultProps = {
  rows: [],
};

export default CustomTable;
