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

import { createGlobalStyle } from 'styled-components';
export default stryMutAct_9fa48("327") ? createGlobalStyle`` : (stryCov_9fa48("327"), createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${stryMutAct_9fa48("328") ? () => undefined : (stryCov_9fa48("328"), props => props.theme ? stryMutAct_9fa48("329") ? "" : (stryCov_9fa48("329"), 'white') : stryMutAct_9fa48("330") ? "" : (stryCov_9fa48("330"), 'black'))};
    background: rgba(30, 30, 30, 0.05)
  }
  * {
    box-sizing: border-box;
  }
  :root {
    --primary-color: #10d35f;
    --font-color: #1E1E1E;
    --secondary-font-color: #76819D;
    --bg-color: #F0F2F5;
    --bg-color2: #E5EBF3;
    --heading-color: #FFF;
    --border-color: #FFF;
	}
  [data-theme="dark"] {
    --primary-color: #10d35f;
    --font-color: #CCD6F6;
    --secondary-font-color: #76819D;
    --bg-color: #181719;
    --bg-color2: #1E1E1E;
    --heading-color: #282828;
    --border-color: #303030;
  }
`);