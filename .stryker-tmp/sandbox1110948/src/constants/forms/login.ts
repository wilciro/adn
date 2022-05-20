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

import { CustomFormFieldProps } from 'components/CustomForm';
export const loginForm: Array<CustomFormFieldProps> = stryMutAct_9fa48("170") ? [] : (stryCov_9fa48("170"), [stryMutAct_9fa48("171") ? {} : (stryCov_9fa48("171"), {
  label: stryMutAct_9fa48("172") ? "" : (stryCov_9fa48("172"), 'Nombre de usuario'),
  name: stryMutAct_9fa48("173") ? "" : (stryCov_9fa48("173"), 'username'),
  placeholder: stryMutAct_9fa48("174") ? "" : (stryCov_9fa48("174"), 'Ingrese el nombre de usuario'),
  type: stryMutAct_9fa48("175") ? "" : (stryCov_9fa48("175"), 'text'),
  required: stryMutAct_9fa48("176") ? {} : (stryCov_9fa48("176"), {
    value: stryMutAct_9fa48("177") ? false : (stryCov_9fa48("177"), true),
    message: stryMutAct_9fa48("178") ? "" : (stryCov_9fa48("178"), 'Por favor ingrese el nombre de usuario')
  })
}), stryMutAct_9fa48("179") ? {} : (stryCov_9fa48("179"), {
  label: stryMutAct_9fa48("180") ? "" : (stryCov_9fa48("180"), 'Contraseña'),
  name: stryMutAct_9fa48("181") ? "" : (stryCov_9fa48("181"), 'password'),
  placeholder: stryMutAct_9fa48("182") ? "" : (stryCov_9fa48("182"), 'Ingrese la contraseña'),
  type: stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), 'password'),
  required: stryMutAct_9fa48("184") ? {} : (stryCov_9fa48("184"), {
    value: stryMutAct_9fa48("185") ? false : (stryCov_9fa48("185"), true),
    message: stryMutAct_9fa48("186") ? "" : (stryCov_9fa48("186"), 'Por favor ingrese la contraseña')
  })
})]);
export const validateFormLogin = stryMutAct_9fa48("187") ? {} : (stryCov_9fa48("187"), {
  username: stryMutAct_9fa48("188") ? () => undefined : (stryCov_9fa48("188"), (value: string) => (stryMutAct_9fa48("192") ? `${value}`.length <= 0 : stryMutAct_9fa48("191") ? `${value}`.length >= 0 : stryMutAct_9fa48("190") ? false : stryMutAct_9fa48("189") ? true : (stryCov_9fa48("189", "190", "191", "192"), (stryMutAct_9fa48("193") ? `` : (stryCov_9fa48("193"), `${value}`)).length > 0)) ? null : stryMutAct_9fa48("194") ? "" : (stryCov_9fa48("194"), 'Por favor ingrese el nombre de usuario')),
  password: stryMutAct_9fa48("195") ? () => undefined : (stryCov_9fa48("195"), (value: string) => (stryMutAct_9fa48("199") ? `${value}`.length <= 0 : stryMutAct_9fa48("198") ? `${value}`.length >= 0 : stryMutAct_9fa48("197") ? false : stryMutAct_9fa48("196") ? true : (stryCov_9fa48("196", "197", "198", "199"), (stryMutAct_9fa48("200") ? `` : (stryCov_9fa48("200"), `${value}`)).length > 0)) ? null : stryMutAct_9fa48("201") ? "" : (stryCov_9fa48("201"), 'Por favor ingrese la contraseña'))
});
export const initialFormLogin = stryMutAct_9fa48("202") ? {} : (stryCov_9fa48("202"), {
  username: stryMutAct_9fa48("203") ? "Stryker was here!" : (stryCov_9fa48("203"), ''),
  password: stryMutAct_9fa48("204") ? "Stryker was here!" : (stryCov_9fa48("204"), '')
});