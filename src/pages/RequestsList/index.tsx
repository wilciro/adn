// React
import React, { Suspense } from 'react';

// Mantine
// import CustomTable from 'components/CustomTable';
import { requestListHeader } from 'constants/tables/request_list';

const CustomTable = React.lazy(() => import('components/CustomTable'));

const RequestsListPage: React.FC = () => {
  return (
    <>
      <h2 id="title-petitions-list" data-testid="title-petitions-list">
        Lista de citas
      </h2>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomTable
          title="Peticiones"
          header={requestListHeader}
          endpoint="requests"
        />
      </Suspense>
    </>
  );
};

export default RequestsListPage;
