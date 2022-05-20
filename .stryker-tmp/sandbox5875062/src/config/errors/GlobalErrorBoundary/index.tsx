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

import { Button, Paper, Space, Text } from '@mantine/core';
import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    if (stryMutAct_9fa48("107")) {
      {}
    } else {
      stryCov_9fa48("107");
      super(props);
      this.state = stryMutAct_9fa48("108") ? {} : (stryCov_9fa48("108"), {
        hasError: stryMutAct_9fa48("109") ? true : (stryCov_9fa48("109"), false)
      });
    }
  }

  public static getDerivedStateFromError(_: Error): State {
    if (stryMutAct_9fa48("110")) {
      {}
    } else {
      stryCov_9fa48("110");
      // Update state so the next render will show the fallback UI.
      return stryMutAct_9fa48("111") ? {} : (stryCov_9fa48("111"), {
        hasError: stryMutAct_9fa48("112") ? false : (stryCov_9fa48("112"), true)
      });
    }
  }
  /* public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  } */


  public render() {
    if (stryMutAct_9fa48("113")) {
      {}
    } else {
      stryCov_9fa48("113");
      const {
        hasError
      } = this.state;
      const {
        children
      } = this.props;

      if (stryMutAct_9fa48("115") ? false : stryMutAct_9fa48("114") ? true : (stryCov_9fa48("114", "115"), hasError)) {
        if (stryMutAct_9fa48("116")) {
          {}
        } else {
          stryCov_9fa48("116");
          return <Container>
          <Paper shadow="xs" p="md">
            <Text>¡Ups! Ocurrió un error mientras navegabas</Text>
            <Text>
              Si este error persite, por favor contacta con soporte, por ahora
              vuelve al inicio con el siguiente enlace.
            </Text>
            <Space h="md" />
            <Link to="/">
              <Button>Volver al inicio</Button>
            </Link>
          </Paper>
        </Container>;
        }
      }

      return children;
    }
  }

}

export default ErrorBoundary;