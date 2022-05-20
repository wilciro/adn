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

import { apiExec } from './genericService';
interface LoginProps {
  username: string;
  password: string;
}
export const loginUser = async (data: LoginProps): Promise<boolean> => {
  if (stryMutAct_9fa48("300")) {
    {}
  } else {
    stryCov_9fa48("300");
    const apiValue = await apiExec(stryMutAct_9fa48("301") ? {} : (stryCov_9fa48("301"), {
      endpoint: stryMutAct_9fa48("302") ? "" : (stryCov_9fa48("302"), 'user'),
      body: data
    }));
    return stryMutAct_9fa48("305") ? apiValue.valid || (apiValue?.data || []).length > 0 : stryMutAct_9fa48("304") ? false : stryMutAct_9fa48("303") ? true : (stryCov_9fa48("303", "304", "305"), apiValue.valid && (stryMutAct_9fa48("308") ? (apiValue?.data || []).length <= 0 : stryMutAct_9fa48("307") ? (apiValue?.data || []).length >= 0 : stryMutAct_9fa48("306") ? true : (stryCov_9fa48("306", "307", "308"), (stryMutAct_9fa48("311") ? apiValue?.data && [] : stryMutAct_9fa48("310") ? false : stryMutAct_9fa48("309") ? true : (stryCov_9fa48("309", "310", "311"), (stryMutAct_9fa48("312") ? apiValue.data : (stryCov_9fa48("312"), apiValue?.data)) || (stryMutAct_9fa48("313") ? ["Stryker was here"] : (stryCov_9fa48("313"), [])))).length > 0)));
  }
};