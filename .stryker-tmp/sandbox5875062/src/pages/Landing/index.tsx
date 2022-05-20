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

import { Box, Button, Space } from '@mantine/core';
import CustomForm from 'components/CustomForm';
import { landingForm, validateFormLanding } from 'constants/forms/landing';
import React, { FC, useRef } from 'react';
type typeCustomForm = React.ElementRef<typeof CustomForm>;

const LandingPage: FC = () => {
  if (stryMutAct_9fa48("240")) {
    {}
  } else {
    stryCov_9fa48("240");
    const refForm = useRef<typeCustomForm>(null);

    const register = () => {
      if (stryMutAct_9fa48("241")) {
        {}
      } else {
        stryCov_9fa48("241");
        stryMutAct_9fa48("242") ? refForm.current.onsubmit() : (stryCov_9fa48("242"), refForm.current?.onsubmit());
      }
    };

    return <Box sx={stryMutAct_9fa48("243") ? {} : (stryCov_9fa48("243"), {
      maxWidth: 350
    })} mx="auto">
      <h2>Solicitud de cita veterinaria</h2>
      <p>Diligencia todos los campos para asignar la cita</p>
      <Space h="md" />
      <CustomForm initialValues={stryMutAct_9fa48("244") ? {} : (stryCov_9fa48("244"), {
        date: stryMutAct_9fa48("245") ? "Stryker was here!" : (stryCov_9fa48("245"), '')
      })} fields={landingForm} validate={validateFormLanding} ref={refForm} />
      <Space h="md" />
      <Button onClick={register} data-testid="register-btn">
        Registrar
      </Button>
    </Box>;
  }
};

export default LandingPage;