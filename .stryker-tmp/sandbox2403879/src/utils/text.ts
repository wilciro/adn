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

export const capitalize = stryMutAct_9fa48("331") ? () => undefined : (stryCov_9fa48("331"), (() => {
  const capitalize = (text: string): string => text.toLowerCase().split(stryMutAct_9fa48("332") ? "" : (stryCov_9fa48("332"), ' ')).map(stryMutAct_9fa48("333") ? () => undefined : (stryCov_9fa48("333"), word => stryMutAct_9fa48("334") ? word.charAt(0).toUpperCase() - word.slice(1) : (stryCov_9fa48("334"), word.charAt(0).toUpperCase() + word.slice(1)))).join(stryMutAct_9fa48("335") ? "" : (stryCov_9fa48("335"), ' '));

  return capitalize;
})());
export const formatPrice = (text: string): string => {
  if (stryMutAct_9fa48("336")) {
    {}
  } else {
    stryCov_9fa48("336");
    const price = new Intl.NumberFormat(stryMutAct_9fa48("337") ? "" : (stryCov_9fa48("337"), 'es-CO'), stryMutAct_9fa48("338") ? {} : (stryCov_9fa48("338"), {
      style: stryMutAct_9fa48("339") ? "" : (stryCov_9fa48("339"), 'currency'),
      currency: stryMutAct_9fa48("340") ? "" : (stryCov_9fa48("340"), 'COP')
    })).format(parseFloat(text));
    return stryMutAct_9fa48("341") ? `` : (stryCov_9fa48("341"), `${price}`);
  }
};