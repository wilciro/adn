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

import { Avatar, Box, Button, Space } from '@mantine/core';
import CustomForm from 'components/CustomForm';
import { SessionContext } from 'context/SessionContext';
import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'services/login.service';
import { initialFormLogin, loginForm, validateFormLogin } from 'constants/forms/login';
type typeCustomForm = React.ElementRef<typeof CustomForm>;

const LoginPage: React.FC = () => {
  if (stryMutAct_9fa48("246")) {
    {}
  } else {
    stryCov_9fa48("246");
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(stryMutAct_9fa48("247") ? true : (stryCov_9fa48("247"), false));
    const refForm = useRef<typeCustomForm>(null);
    const {
      mutations: {
        setUsername
      }
    } = useContext(SessionContext);

    const login = () => {
      if (stryMutAct_9fa48("248")) {
        {}
      } else {
        stryCov_9fa48("248");
        const dataForm = stryMutAct_9fa48("249") ? refForm.current.onsubmit() : (stryCov_9fa48("249"), refForm.current?.onsubmit());

        if (stryMutAct_9fa48("251") ? false : stryMutAct_9fa48("250") ? true : (stryCov_9fa48("250", "251"), dataForm)) {
          if (stryMutAct_9fa48("252")) {
            {}
          } else {
            stryCov_9fa48("252");
            setLoading(stryMutAct_9fa48("253") ? false : (stryCov_9fa48("253"), true));
            const dataSend = stryMutAct_9fa48("254") ? {} : (stryCov_9fa48("254"), {
              username: stryMutAct_9fa48("257") ? (dataForm?.username as string) && '' : stryMutAct_9fa48("256") ? false : stryMutAct_9fa48("255") ? true : (stryCov_9fa48("255", "256", "257"), (dataForm?.username as string) || (stryMutAct_9fa48("258") ? "Stryker was here!" : (stryCov_9fa48("258"), ''))),
              password: stryMutAct_9fa48("261") ? (dataForm?.password as string) && '' : stryMutAct_9fa48("260") ? false : stryMutAct_9fa48("259") ? true : (stryCov_9fa48("259", "260", "261"), (dataForm?.password as string) || (stryMutAct_9fa48("262") ? "Stryker was here!" : (stryCov_9fa48("262"), '')))
            });
            loginUser(dataSend).then((valid: boolean) => {
              if (stryMutAct_9fa48("263")) {
                {}
              } else {
                stryCov_9fa48("263");
                setLoading(stryMutAct_9fa48("264") ? true : (stryCov_9fa48("264"), false));

                if (stryMutAct_9fa48("266") ? false : stryMutAct_9fa48("265") ? true : (stryCov_9fa48("265", "266"), valid)) {
                  if (stryMutAct_9fa48("267")) {
                    {}
                  } else {
                    stryCov_9fa48("267");
                    setUsername(dataSend.username);
                    navigate(stryMutAct_9fa48("268") ? "" : (stryCov_9fa48("268"), '/dashboard'));
                  }
                }
              }
            });
          }
        }
      }
    };

    return <Box sx={stryMutAct_9fa48("269") ? {} : (stryCov_9fa48("269"), {
      maxWidth: 350
    })} mx="auto">
      <Avatar size="lg">I</Avatar>
      <h2 id="title-login">Inicio de sesión</h2>
      <p>Ingresa tus datos y empieza la administración</p>
      <Space h="md" />
      <CustomForm fields={loginForm} validate={validateFormLogin} initialValues={initialFormLogin} ref={refForm} />
      <Space h="md" />
      <Button onClick={login} loading={loading} id="login-button" data-testid="login-btn">
        Iniciar sesión
      </Button>
    </Box>;
  }
};

export default LoginPage;