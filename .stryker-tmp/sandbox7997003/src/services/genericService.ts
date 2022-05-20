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

import axios from 'axios';
const OK_MAX = 300;
const OK_MIN = 200;
export interface ApiResponseModel {
  data: Array<object> | null;
  valid: boolean;
}
export interface ApiModel {
  endpoint: string;
  method?: string;
  body?: object;
}
export const apiExec = async ({
  endpoint,
  method = stryMutAct_9fa48("278") ? "" : (stryCov_9fa48("278"), 'GET'),
  body = {}
}: ApiModel): Promise<ApiResponseModel> => {
  if (stryMutAct_9fa48("279")) {
    {}
  } else {
    stryCov_9fa48("279");

    try {
      if (stryMutAct_9fa48("280")) {
        {}
      } else {
        stryCov_9fa48("280");
        const response = await axios.get(stryMutAct_9fa48("281") ? `` : (stryCov_9fa48("281"), `${process.env.REACT_APP_HOST}/${endpoint}`), stryMutAct_9fa48("282") ? {} : (stryCov_9fa48("282"), {
          params: body
        }));

        if (stryMutAct_9fa48("285") ? response.status >= OK_MIN || response.status < OK_MAX : stryMutAct_9fa48("284") ? false : stryMutAct_9fa48("283") ? true : (stryCov_9fa48("283", "284", "285"), (stryMutAct_9fa48("288") ? response.status < OK_MIN : stryMutAct_9fa48("287") ? response.status > OK_MIN : stryMutAct_9fa48("286") ? true : (stryCov_9fa48("286", "287", "288"), response.status >= OK_MIN)) && (stryMutAct_9fa48("291") ? response.status >= OK_MAX : stryMutAct_9fa48("290") ? response.status <= OK_MAX : stryMutAct_9fa48("289") ? true : (stryCov_9fa48("289", "290", "291"), response.status < OK_MAX)))) {
          if (stryMutAct_9fa48("292")) {
            {}
          } else {
            stryCov_9fa48("292");
            return stryMutAct_9fa48("293") ? {} : (stryCov_9fa48("293"), {
              data: response.data,
              valid: stryMutAct_9fa48("294") ? false : (stryCov_9fa48("294"), true)
            });
          }
        }

        return stryMutAct_9fa48("295") ? {} : (stryCov_9fa48("295"), {
          data: null,
          valid: stryMutAct_9fa48("296") ? true : (stryCov_9fa48("296"), false)
        });
      }
    } catch (error) {
      if (stryMutAct_9fa48("297")) {
        {}
      } else {
        stryCov_9fa48("297");
        return stryMutAct_9fa48("298") ? {} : (stryCov_9fa48("298"), {
          data: null,
          valid: stryMutAct_9fa48("299") ? true : (stryCov_9fa48("299"), false)
        });
      }
    }
  }
};