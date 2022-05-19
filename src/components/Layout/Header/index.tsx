// React
import { ActionIcon, Button } from '@mantine/core';
import { SessionContext } from 'context/SessionContext';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu2 } from 'tabler-icons-react';

// Style
import { ButtonsSeparator, Header, Nav, NavClose, NavMenu } from './style';

const LayoutHeader: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const {
    data: { username },
    mutations: { setUsername },
  } = useContext(SessionContext);

  const logged = username ?? false;

  const navigate = useNavigate();

  const logout = () => {
    setUsername(undefined);
    navigate('/login');
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Header>
        <ButtonsSeparator>
          <ActionIcon variant="outline" title="Menú" onClick={toggleMenu}>
            <Menu2 size={18} />
          </ActionIcon>
          Icon
        </ButtonsSeparator>
        <ButtonsSeparator>
          {logged ? (
            <Button onClick={logout} id="header-logout-link">
              Salir
            </Button>
          ) : (
            <Link to="/login" id="header-login-link">
              <Button>Ingresar</Button>
            </Link>
          )}
        </ButtonsSeparator>
      </Header>
      <Nav open={openMenu}>
        <NavClose onClick={toggleMenu}>X</NavClose>
        <NavMenu>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          {logged && (
            <li>
              <Link to="/dashboard" onClick={toggleMenu}>
                Lista de citas
              </Link>
            </li>
          )}
          <li>
            <Link to="/about" onClick={toggleMenu}>
              Acerca de la app
            </Link>
          </li>
        </NavMenu>
      </Nav>
    </>
  );
};

export default LayoutHeader;
