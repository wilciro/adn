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
export const landingForm: Array<CustomFormFieldProps> = stryMutAct_9fa48("118") ? [] : (stryCov_9fa48("118"), [stryMutAct_9fa48("119") ? {} : (stryCov_9fa48("119"), {
  label: stryMutAct_9fa48("120") ? "" : (stryCov_9fa48("120"), 'Nombre del dueño'),
  name: stryMutAct_9fa48("121") ? "" : (stryCov_9fa48("121"), 'ownerName'),
  placeholder: stryMutAct_9fa48("122") ? "" : (stryCov_9fa48("122"), 'Ingrese el nombre del dueño'),
  type: stryMutAct_9fa48("123") ? "" : (stryCov_9fa48("123"), 'text'),
  required: stryMutAct_9fa48("124") ? {} : (stryCov_9fa48("124"), {
    value: stryMutAct_9fa48("125") ? false : (stryCov_9fa48("125"), true),
    message: stryMutAct_9fa48("126") ? "" : (stryCov_9fa48("126"), 'Por favor ingrese el nombre del dueño')
  })
}), stryMutAct_9fa48("127") ? {} : (stryCov_9fa48("127"), {
  label: stryMutAct_9fa48("128") ? "" : (stryCov_9fa48("128"), 'Documento del dueño'),
  name: stryMutAct_9fa48("129") ? "" : (stryCov_9fa48("129"), 'owner_document'),
  placeholder: stryMutAct_9fa48("130") ? "" : (stryCov_9fa48("130"), 'Ingrese el documento del dueño'),
  type: stryMutAct_9fa48("131") ? "" : (stryCov_9fa48("131"), 'text'),
  required: stryMutAct_9fa48("132") ? {} : (stryCov_9fa48("132"), {
    value: stryMutAct_9fa48("133") ? false : (stryCov_9fa48("133"), true),
    message: stryMutAct_9fa48("134") ? "" : (stryCov_9fa48("134"), 'Por favor ingrese el documento del dueño')
  })
}), stryMutAct_9fa48("135") ? {} : (stryCov_9fa48("135"), {
  label: stryMutAct_9fa48("136") ? "" : (stryCov_9fa48("136"), 'Nombre de la mascota'),
  name: stryMutAct_9fa48("137") ? "" : (stryCov_9fa48("137"), 'pet_name'),
  placeholder: stryMutAct_9fa48("138") ? "" : (stryCov_9fa48("138"), 'Ingrese el nombre de la mascota'),
  type: stryMutAct_9fa48("139") ? "" : (stryCov_9fa48("139"), 'text'),
  required: stryMutAct_9fa48("140") ? {} : (stryCov_9fa48("140"), {
    value: stryMutAct_9fa48("141") ? false : (stryCov_9fa48("141"), true),
    message: stryMutAct_9fa48("142") ? "" : (stryCov_9fa48("142"), 'Por favor ingrese el nombre de la mascota')
  })
}), stryMutAct_9fa48("143") ? {} : (stryCov_9fa48("143"), {
  label: stryMutAct_9fa48("144") ? "" : (stryCov_9fa48("144"), 'Edad de la mascota'),
  name: stryMutAct_9fa48("145") ? "" : (stryCov_9fa48("145"), 'pet_age'),
  placeholder: stryMutAct_9fa48("146") ? "" : (stryCov_9fa48("146"), 'Ingrese la edad de la mascota'),
  type: stryMutAct_9fa48("147") ? "" : (stryCov_9fa48("147"), 'text'),
  required: stryMutAct_9fa48("148") ? {} : (stryCov_9fa48("148"), {
    value: stryMutAct_9fa48("149") ? false : (stryCov_9fa48("149"), true),
    message: stryMutAct_9fa48("150") ? "" : (stryCov_9fa48("150"), 'Por favor ingrese la edad de la mascota')
  })
}), stryMutAct_9fa48("151") ? {} : (stryCov_9fa48("151"), {
  label: stryMutAct_9fa48("152") ? "" : (stryCov_9fa48("152"), 'Fecha de la cita'),
  name: stryMutAct_9fa48("153") ? "" : (stryCov_9fa48("153"), 'date'),
  placeholder: stryMutAct_9fa48("154") ? "" : (stryCov_9fa48("154"), 'Seleccione la fecha de la cita'),
  type: stryMutAct_9fa48("155") ? "" : (stryCov_9fa48("155"), 'text'),
  required: stryMutAct_9fa48("156") ? {} : (stryCov_9fa48("156"), {
    value: stryMutAct_9fa48("157") ? false : (stryCov_9fa48("157"), true),
    message: stryMutAct_9fa48("158") ? "" : (stryCov_9fa48("158"), 'Por favor seleccione la fecha de la cita')
  })
})]);
export const validateFormLanding = stryMutAct_9fa48("159") ? {} : (stryCov_9fa48("159"), {
  ownerName: stryMutAct_9fa48("160") ? () => undefined : (stryCov_9fa48("160"), (value: string) => (stryMutAct_9fa48("164") ? `${value}`.length <= 0 : stryMutAct_9fa48("163") ? `${value}`.length >= 0 : stryMutAct_9fa48("162") ? false : stryMutAct_9fa48("161") ? true : (stryCov_9fa48("161", "162", "163", "164"), (stryMutAct_9fa48("165") ? `` : (stryCov_9fa48("165"), `${value}`)).length > 0)) ? null : stryMutAct_9fa48("166") ? "" : (stryCov_9fa48("166"), 'Por favor ingrese el nombre del dueño')),
  date: stryMutAct_9fa48("167") ? () => undefined : (stryCov_9fa48("167"), (value: string) => stryMutAct_9fa48("168") ? (stryMutAct_9fa48("169") ? `` : (stryCov_9fa48("169"), `${value}`)).length - 1 : (stryCov_9fa48("168"), (stryMutAct_9fa48("169") ? `` : (stryCov_9fa48("169"), `${value}`)).length + 1))
});