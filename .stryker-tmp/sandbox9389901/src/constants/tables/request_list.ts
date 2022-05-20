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

import { formatPrice } from 'utils/text';
export const requestListHeader = stryMutAct_9fa48("205") ? [] : (stryCov_9fa48("205"), [stryMutAct_9fa48("206") ? {} : (stryCov_9fa48("206"), {
  label: stryMutAct_9fa48("207") ? "" : (stryCov_9fa48("207"), 'Mascota'),
  row: stryMutAct_9fa48("208") ? "" : (stryCov_9fa48("208"), 'pet_name')
}), stryMutAct_9fa48("209") ? {} : (stryCov_9fa48("209"), {
  label: stryMutAct_9fa48("210") ? "" : (stryCov_9fa48("210"), 'Tipo mascota'),
  row: stryMutAct_9fa48("211") ? "" : (stryCov_9fa48("211"), 'pet_type')
}), stryMutAct_9fa48("212") ? {} : (stryCov_9fa48("212"), {
  label: stryMutAct_9fa48("213") ? "" : (stryCov_9fa48("213"), 'Edad mascota'),
  row: stryMutAct_9fa48("214") ? "" : (stryCov_9fa48("214"), 'pet_age')
}), stryMutAct_9fa48("215") ? {} : (stryCov_9fa48("215"), {
  label: stryMutAct_9fa48("216") ? "" : (stryCov_9fa48("216"), 'Dueño'),
  row: stryMutAct_9fa48("217") ? "" : (stryCov_9fa48("217"), 'owner_name')
}), stryMutAct_9fa48("218") ? {} : (stryCov_9fa48("218"), {
  label: stryMutAct_9fa48("219") ? "" : (stryCov_9fa48("219"), 'Documento dueño'),
  row: stryMutAct_9fa48("220") ? "" : (stryCov_9fa48("220"), 'owner_document')
}), stryMutAct_9fa48("221") ? {} : (stryCov_9fa48("221"), {
  label: stryMutAct_9fa48("222") ? "" : (stryCov_9fa48("222"), 'Date'),
  row: stryMutAct_9fa48("223") ? "" : (stryCov_9fa48("223"), 'date')
}), stryMutAct_9fa48("224") ? {} : (stryCov_9fa48("224"), {
  label: stryMutAct_9fa48("225") ? "" : (stryCov_9fa48("225"), 'Precio'),
  row: stryMutAct_9fa48("226") ? "" : (stryCov_9fa48("226"), 'price'),
  format: stryMutAct_9fa48("227") ? () => undefined : (stryCov_9fa48("227"), (price: string) => formatPrice(price))
})]);