// React
import React from 'react';

// Mantine
import CustomTable from 'components/CustomTable';
import { requestListHeader } from 'constants/tables/request_list';

const RequestsListPage: React.FC = () => {

  return (  
    <CustomTable 
      title="Peticiones"
      header={requestListHeader}
      endpoint="requests"
    />
  );
};

export default RequestsListPage