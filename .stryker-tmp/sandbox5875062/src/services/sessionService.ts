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

import { v4 as uuidv4 } from 'uuid';
import { SessionState } from 'context/models/SessionState';
const SESSION_IDENTIFIER = stryMutAct_9fa48("314") ? "" : (stryCov_9fa48("314"), 'SESSION_ID');
const SESSION_SEPARATOR = stryMutAct_9fa48("315") ? "" : (stryCov_9fa48("315"), ':::');
export const createSession = (username?: string): string => {
  if (stryMutAct_9fa48("316")) {
    {}
  } else {
    stryCov_9fa48("316");
    const sessionId = stryMutAct_9fa48("317") ? `` : (stryCov_9fa48("317"), `${uuidv4()}${SESSION_SEPARATOR}${username}${SESSION_SEPARATOR}${Date.now()}`);
    localStorage.setItem(SESSION_IDENTIFIER, sessionId);
    return sessionId;
  }
};
export const recoverSession = (): SessionState => {
  if (stryMutAct_9fa48("318")) {
    {}
  } else {
    stryCov_9fa48("318");
    const sessionId = localStorage.getItem(SESSION_IDENTIFIER);

    if (stryMutAct_9fa48("321") ? false : stryMutAct_9fa48("320") ? true : stryMutAct_9fa48("319") ? sessionId : (stryCov_9fa48("319", "320", "321"), !sessionId)) {
      if (stryMutAct_9fa48("322")) {
        {}
      } else {
        stryCov_9fa48("322");
        return {};
      }
    }

    return stryMutAct_9fa48("323") ? {} : (stryCov_9fa48("323"), {
      sessionId,
      username: sessionId.split(SESSION_SEPARATOR)[1]
    });
  }
};
export const deleteSession = (): undefined => {
  if (stryMutAct_9fa48("324")) {
    {}
  } else {
    stryCov_9fa48("324");
    localStorage.removeItem(SESSION_IDENTIFIER);
    return undefined;
  }
};