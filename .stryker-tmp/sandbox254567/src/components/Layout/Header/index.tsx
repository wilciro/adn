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

import { ActionIcon, Button } from '@mantine/core';
import { SessionContext } from 'context/SessionContext';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu2 } from 'tabler-icons-react'; // Style

import { ButtonsSeparator, Header, Nav, NavClose, NavMenu } from './style';

const LayoutHeader: React.FC = () => {
  if (stryMutAct_9fa48("88")) {
    {}
  } else {
    stryCov_9fa48("88");
    const [openMenu, setOpenMenu] = useState<boolean>(stryMutAct_9fa48("89") ? true : (stryCov_9fa48("89"), false));
    const {
      data: {
        username
      },
      mutations: {
        setUsername
      }
    } = useContext(SessionContext);
    const logged = stryMutAct_9fa48("90") ? username && false : (stryCov_9fa48("90"), username ?? (stryMutAct_9fa48("91") ? true : (stryCov_9fa48("91"), false)));
    const navigate = useNavigate();

    const logout = () => {
      if (stryMutAct_9fa48("92")) {
        {}
      } else {
        stryCov_9fa48("92");
        setUsername(undefined);
        navigate(stryMutAct_9fa48("93") ? "" : (stryCov_9fa48("93"), '/login'));
      }
    };

    const toggleMenu = () => {
      if (stryMutAct_9fa48("94")) {
        {}
      } else {
        stryCov_9fa48("94");
        setOpenMenu(stryMutAct_9fa48("95") ? openMenu : (stryCov_9fa48("95"), !openMenu));
      }
    };

    return <>
      <Header>
        <ButtonsSeparator>
          <ActionIcon variant="outline" title="Menú" onClick={toggleMenu} data-testid="btn-nav-menu">
            <Menu2 size={18} />
          </ActionIcon>
          Icon
        </ButtonsSeparator>
        <ButtonsSeparator>
          {logged ? <Button onClick={logout} data-testid="header-logout-link">
              Salir
            </Button> : <Link to="/login" id="header-login-link">
              <Button>Ingresar</Button>
            </Link>}
        </ButtonsSeparator>
      </Header>
      <Nav open={openMenu} data-testid="nav-menu">
        <NavClose onClick={toggleMenu}>X</NavClose>
        <NavMenu>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          {stryMutAct_9fa48("98") ? logged || <li>
              <Link to="/dashboard" onClick={toggleMenu}>
                Lista de citas
              </Link>
            </li> : stryMutAct_9fa48("97") ? false : stryMutAct_9fa48("96") ? true : (stryCov_9fa48("96", "97", "98"), logged && <li>
              <Link to="/dashboard" onClick={toggleMenu}>
                Lista de citas
              </Link>
            </li>)}
          <li>
            <Link to="/about" onClick={toggleMenu}>
              Acerca de la app
            </Link>
          </li>
        </NavMenu>
      </Nav>
    </>;
  }
};

export default LayoutHeader;