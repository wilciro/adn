// React
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Context
import LayoutHeader from 'components/Layout/Header';
import LayoutFooter from 'components/Layout/Footer';
import LayoutBody from 'components/Layout/Body';
import CustomRoutes from 'components/CustomRoutes';
import ErrorBoundary from 'config/errors/GlobalErrorBoundary';
import { SessionProvider } from 'context/SessionContext';
import { MantineProvider } from '@mantine/core';

const App: FC = () => {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'light',
        colors: {
          brand: [
            '#10d35f',
            '#10d35f',
            '#10d35f',
            '#10d35f',
            '#10d35f',
            '#10d35f',
            '#10d35f',
            '#10d35f',
            '#10d35f',
            '#10d35f',
          ],
        },
        primaryColor: 'brand',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <ErrorBoundary>
          <SessionProvider>
            <LayoutHeader />
            <LayoutBody>
              <CustomRoutes />
            </LayoutBody>
            <LayoutFooter />
          </SessionProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
