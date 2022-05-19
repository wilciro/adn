// React
import React, { useEffect, useState } from 'react';

// Mantine
import { Table } from '@mantine/core';
import { getTableData } from 'services/tableService';
import { TableResponsive } from './styles';

interface HeaderModel {
    label: string,
    row: string,
    format?: (row: string) => string
}

export interface CustomTableProps {
    header: Array<HeaderModel>,
    title: string,
    endpoint: string
}

const CustomTable: React.FC<CustomTableProps> = ({header, title, endpoint}) => {

    const [rowsData, setRowsData] = useState<Array<object>>([]);
    
    const getData = async () => {
        const data = await getTableData(endpoint);
        if (data.valid) {
            setRowsData(data.data);
        }
    };
    
    useEffect(() => {
        getData();
    }, [])

    const ths = header.map((item: HeaderModel, index: number) => (
        <th key={`header-${item.row}`}>{item.label}</th>
    ));

    return (
        <TableResponsive>
            <Table striped highlightOnHover>
                <caption>{title}</caption>
                <thead>
                    <tr>
                        {ths}
                    </tr>
                </thead>
                <tbody>
                    {
                        rowsData.map((row: object, index: number) => {      
                            return (
                                <tr key={`column-${index}`}>
                                    {
                                        header.map((itemHeader: HeaderModel, indexHeader: number) => {
                                            if (itemHeader.format)  {
                                                return <td key={`row-${index}-${indexHeader}`}>{itemHeader.format(itemHeader.row in row ? row[itemHeader.row as keyof typeof row] : "")}</td>
                                            }
                                            return <td key={`row-${index}-${indexHeader}`}>{itemHeader.row in row ? row[itemHeader.row as keyof typeof row] : ""}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }    
                </tbody>
            </Table>
        </TableResponsive>
    );
};

export default CustomTable;

