import styled from 'styled-components';

export const Header = styled.header`
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
`;

export const ButtonsSeparator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface NavProps {
  open: boolean;
}

export const Nav = styled.nav<NavProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  z-index: 10;
  display: ${(p) => (p.open ? 'flex' : 'none')};
  align-items: center;
`;

export const NavMenu = styled.ul`
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
`;

export const NavClose = styled.button`
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
`;
