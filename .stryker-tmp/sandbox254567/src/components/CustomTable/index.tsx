// @ts-nocheck
// React
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});

  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }

  function retrieveNS() {
    return ns;
  }

  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}

stryNS_9fa48();

function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });

  function cover() {
    var c = cov.static;

    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }

    var a = arguments;

    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }

  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}

function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();

  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }

      return true;
    }

    return false;
  }

  stryMutAct_9fa48 = isActive;
  return isActive(id);
}

import React, { useEffect, useState } from 'react'; // Mantine

import { Table } from '@mantine/core';
import { getTableData } from 'services/tableService';
import { TableResponsive } from './styles';
interface HeaderModel {
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
  rows = stryMutAct_9fa48("51") ? ["Stryker was here"] : (stryCov_9fa48("51"), [])
}) => {
  if (stryMutAct_9fa48("52")) {
    {}
  } else {
    stryCov_9fa48("52");
    const [rowsData, setRowsData] = useState<Array<object>>(rows);

    const getData = async () => {
      if (stryMutAct_9fa48("53")) {
        {}
      } else {
        stryCov_9fa48("53");

        if (stryMutAct_9fa48("57") ? endpoint.length <= 0 : stryMutAct_9fa48("56") ? endpoint.length >= 0 : stryMutAct_9fa48("55") ? false : stryMutAct_9fa48("54") ? true : (stryCov_9fa48("54", "55", "56", "57"), endpoint.length > 0)) {
          if (stryMutAct_9fa48("58")) {
            {}
          } else {
            stryCov_9fa48("58");
            const data = await getTableData(endpoint);

            if (stryMutAct_9fa48("60") ? false : stryMutAct_9fa48("59") ? true : (stryCov_9fa48("59", "60"), data.valid)) {
              if (stryMutAct_9fa48("61")) {
                {}
              } else {
                stryCov_9fa48("61");
                setRowsData(stryMutAct_9fa48("64") ? data.data && [] : stryMutAct_9fa48("63") ? false : stryMutAct_9fa48("62") ? true : (stryCov_9fa48("62", "63", "64"), data.data || (stryMutAct_9fa48("65") ? ["Stryker was here"] : (stryCov_9fa48("65"), []))));
              }
            }
          }
        }
      }
    };

    useEffect(() => {
      if (stryMutAct_9fa48("66")) {
        {}
      } else {
        stryCov_9fa48("66");
        getData();
      }
    }, stryMutAct_9fa48("67") ? ["Stryker was here"] : (stryCov_9fa48("67"), []));
    const ths = header.map(stryMutAct_9fa48("68") ? () => undefined : (stryCov_9fa48("68"), (item: HeaderModel, index: number) => <th key={stryMutAct_9fa48("69") ? `` : (stryCov_9fa48("69"), `header-${item.row}`)}>{item.label}</th>));
    return <TableResponsive>
      <Table striped highlightOnHover>
        <caption>{title}</caption>
        <thead>
          <tr>{ths}</tr>
        </thead>
        <tbody>
          {rowsData.map((row: object, index: number) => {
            if (stryMutAct_9fa48("70")) {
              {}
            } else {
              stryCov_9fa48("70");
              return <tr key={stryMutAct_9fa48("71") ? `` : (stryCov_9fa48("71"), `column-${index}`)}>
                {header.map((itemH: HeaderModel, iHead: number) => {
                  if (stryMutAct_9fa48("72")) {
                    {}
                  } else {
                    stryCov_9fa48("72");

                    if (stryMutAct_9fa48("74") ? false : stryMutAct_9fa48("73") ? true : (stryCov_9fa48("73", "74"), itemH.format)) {
                      if (stryMutAct_9fa48("75")) {
                        {}
                      } else {
                        stryCov_9fa48("75");
                        return <td key={stryMutAct_9fa48("76") ? `` : (stryCov_9fa48("76"), `${index}-${iHead}`)}>
                        {itemH.format(itemH.row in row ? row[(itemH.row as keyof typeof row)] : stryMutAct_9fa48("77") ? "Stryker was here!" : (stryCov_9fa48("77"), ''))}
                      </td>;
                      }
                    }

                    return <td key={stryMutAct_9fa48("78") ? `` : (stryCov_9fa48("78"), `${index}-${iHead}`)}>
                      {itemH.row in row ? row[(itemH.row as keyof typeof row)] : stryMutAct_9fa48("79") ? "Stryker was here!" : (stryCov_9fa48("79"), '')}
                    </td>;
                  }
                })}
              </tr>;
            }
          })}
        </tbody>
      </Table>
    </TableResponsive>;
  }
};

CustomTable.defaultProps = stryMutAct_9fa48("80") ? {} : (stryCov_9fa48("80"), {
  rows: stryMutAct_9fa48("81") ? ["Stryker was here"] : (stryCov_9fa48("81"), [])
});
export default CustomTable;