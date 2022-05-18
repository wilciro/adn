// React
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Custom

// Context
// import { SessionContext } from 'context/SessionContext';
import LayoutHeader from 'components/Layout/Header';
import LayoutFooter from 'components/Layout/Footer';
import LayoutBody from 'components/Layout/Body';
import CustomRoutes from 'components/CustomRoutes';
import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

const App: FC = () => {
  // const { data: { sessionId } } = useContext(SessionContext);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  };
    
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ 
          colorScheme: 'dark', 
          colors: {
            brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82','#AD1374' ],
          },
          primaryColor: 'brand'
        }}
        withGlobalStyles
        withNormalizeCSS 
      >
      <BrowserRouter>

        <AppShell
          padding="md"
          header={<LayoutHeader logged={false} />}
          footer={<LayoutFooter />}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        > 
          <LayoutBody>
              <CustomRoutes />
          </LayoutBody>
        </AppShell>
      </BrowserRouter>
        
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
