// @ts-nocheck
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

import React, { createContext, useEffect, useState } from 'react';
import { SessionState } from 'context/models/SessionState';
import * as sessionService from '../services/sessionService';
export const useStateContainer = (initialState: SessionState = {}) => {
  if (stryMutAct_9fa48("228")) {
    {}
  } else {
    stryCov_9fa48("228");
    const [username, setUsername] = useState(initialState.username);
    const [sessionId, setSessionId] = useState(initialState.sessionId);
    useEffect(() => {
      if (stryMutAct_9fa48("229")) {
        {}
      } else {
        stryCov_9fa48("229");

        if (stryMutAct_9fa48("232") ? false : stryMutAct_9fa48("231") ? true : stryMutAct_9fa48("230") ? username : (stryCov_9fa48("230", "231", "232"), !username)) {
          if (stryMutAct_9fa48("233")) {
            {}
          } else {
            stryCov_9fa48("233");
            setSessionId(sessionService.deleteSession());
            return;
          }
        }

        setSessionId(sessionService.createSession(username));
      }
    }, stryMutAct_9fa48("234") ? [] : (stryCov_9fa48("234"), [username]));
    return stryMutAct_9fa48("235") ? {} : (stryCov_9fa48("235"), {
      data: stryMutAct_9fa48("236") ? {} : (stryCov_9fa48("236"), {
        username,
        sessionId
      }),
      mutations: stryMutAct_9fa48("237") ? {} : (stryCov_9fa48("237"), {
        setUsername
      })
    });
  }
};
export const SessionContext = createContext<ReturnType<typeof useStateContainer>>(({} as never));
interface SessionProps {
  children: React.ReactNode;
}
export const SessionProvider = ({
  children
}: SessionProps) => {
  if (stryMutAct_9fa48("238")) {
    {}
  } else {
    stryCov_9fa48("238");
    const contextValue = useStateContainer(sessionService.recoverSession());
    return <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>;
  }
};