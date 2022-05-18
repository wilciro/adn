// React
import React from 'react';

// Mantine
import CustomTable from 'components/CustomTable';
import { requestListHeader } from 'constants/tables/request_list';

export const RequestsListPage: React.FC = () => {

  return (
    <div>      
      <CustomTable 
        title="Peticiones"
        header={requestListHeader}
        endpoint="requests"
      />
    </div>
  );
};
