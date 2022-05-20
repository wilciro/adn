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

import React, { FC, Suspense, useContext } from 'react';
import { Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router'; // Context

import { SessionContext } from 'context/SessionContext'; // Pages

import LandingPage from 'pages/Landing';
import RequestsListPage from 'pages/RequestsList';
import AboutPage from 'pages/About';
const LoginPage = React.lazy(stryMutAct_9fa48("45") ? () => undefined : (stryCov_9fa48("45"), () => import(stryMutAct_9fa48("46") ? "" : (stryCov_9fa48("46"), 'pages/Login'))));

const CustomRoutes: FC = () => {
  if (stryMutAct_9fa48("47")) {
    {}
  } else {
    stryCov_9fa48("47");
    const {
      data: {
        username
      }
    } = useContext(SessionContext);
    const logged = stryMutAct_9fa48("48") ? username && false : (stryCov_9fa48("48"), username ?? (stryMutAct_9fa48("49") ? true : (stryCov_9fa48("49"), false)));
    return <Routes>
      <Route path="/404" element={<LandingPage />} />
      <Route path="/login" element={(stryMutAct_9fa48("50") ? logged : (stryCov_9fa48("50"), !logged)) ? <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={logged ? <RequestsListPage /> : <Navigate to="/login" />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>;
  }
};

export default CustomRoutes;