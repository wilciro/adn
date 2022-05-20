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
            '#F0BBDD',
            '#ED9BCF',
            '#EC7CC3',
            '#ED5DB8',
            '#F13EAF',
            '#F71FA7',
            '#FF00A1',
            '#E00890',
            '#C50E82',
            '#AD1374',
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
