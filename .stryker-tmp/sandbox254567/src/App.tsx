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

import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Context

import LayoutHeader from 'components/Layout/Header';
import LayoutFooter from 'components/Layout/Footer';
import LayoutBody from 'components/Layout/Body';
import CustomRoutes from 'components/CustomRoutes';
import ErrorBoundary from 'config/errors/GlobalErrorBoundary';
import { SessionProvider } from 'context/SessionContext';
import { MantineProvider } from '@mantine/core';

const App: FC = () => {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    return <MantineProvider theme={stryMutAct_9fa48("1") ? {} : (stryCov_9fa48("1"), {
      colorScheme: stryMutAct_9fa48("2") ? "" : (stryCov_9fa48("2"), 'light'),
      colors: stryMutAct_9fa48("3") ? {} : (stryCov_9fa48("3"), {
        brand: stryMutAct_9fa48("4") ? [] : (stryCov_9fa48("4"), [stryMutAct_9fa48("5") ? "" : (stryCov_9fa48("5"), '#10d35f'), stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), '#10d35f'), stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), '#10d35f'), stryMutAct_9fa48("8") ? "" : (stryCov_9fa48("8"), '#10d35f'), stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), '#10d35f'), stryMutAct_9fa48("10") ? "" : (stryCov_9fa48("10"), '#10d35f'), stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), '#10d35f'), stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), '#10d35f'), stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), '#10d35f'), stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), '#10d35f')])
      }),
      primaryColor: stryMutAct_9fa48("15") ? "" : (stryCov_9fa48("15"), 'brand')
    })} withGlobalStyles withNormalizeCSS>
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
    </MantineProvider>;
  }
};

export default App;