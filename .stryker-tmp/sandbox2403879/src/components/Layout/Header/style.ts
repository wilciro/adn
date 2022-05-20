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

import styled from 'styled-components';
export const Header = stryMutAct_9fa48("99") ? styled.header`` : (stryCov_9fa48("99"), styled.header`
  width: 90%;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(10, 10, 10, 0.5);
  background: rgba(240, 240, 240, 0.7);
  backdrop-filter: blur(5px);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 5px;
  left: 5%;
  z-index: 5;

  @media (max-width: 768px) {
    width: 100%;
    left: 0px;
    top: 0px;
  }
`);
export const ButtonsSeparator = stryMutAct_9fa48("100") ? styled.div`` : (stryCov_9fa48("100"), styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`);
interface NavProps {
  open: boolean;
}
export const Nav = stryMutAct_9fa48("101") ? styled.nav<NavProps>`` : (stryCov_9fa48("101"), styled.nav<NavProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  z-index: 10;
  display: ${stryMutAct_9fa48("102") ? () => undefined : (stryCov_9fa48("102"), p => p.open ? stryMutAct_9fa48("103") ? "" : (stryCov_9fa48("103"), 'flex') : stryMutAct_9fa48("104") ? "" : (stryCov_9fa48("104"), 'none'))};
  align-items: center;
`);
export const NavMenu = stryMutAct_9fa48("105") ? styled.ul`` : (stryCov_9fa48("105"), styled.ul`
  list-style: none;
  font-size: 8vw;
  margin-left: 5%;

  a {
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    &:hover {
      opacity: 0.9;
      color: var(--primary-color);
    }
  }
`);
export const NavClose = stryMutAct_9fa48("106") ? styled.button`` : (stryCov_9fa48("106"), styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 4em;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  cursor: pointer;
  background: none;
  color: white;
  border: none;
  &:hover {
    opacity: 0.8;
    color: var(--primary-color);
  }
`);