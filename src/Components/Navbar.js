import React from 'react';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  background: #1e2326;
  position: static;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  font-weight:bold;
`;

const HeaderWrapper = styled.header`
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`;

const Logo = styled.div`
  & a {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 36px;
    color: #CC0099;
    text-decoration: none;
    font-weight:bold;
  }
`;

const Nav = styled.nav`
  & ul {
    display: flex;
    list-style: none;
  }
`;

const NavLink = styled.a`
  text-align: none;
  color: #CC0099;
  margin: 0 15px;
  padding: 3px;
  transition: 0.5s;
  text-decoration: none;

  &:hover {
    color: #9933CC;
  }
`;

function Navbar() {
  const handleNavClick = () => {
    // Lógica para seleccionar la sección
  };

//href="#inicio" indica hasta el componente donde va a escrolear
  return (
    <ContainerHeader>
      <HeaderWrapper>
        <Logo>
          <a href="#">Yamila De Olivera</a>
        </Logo>
        <Nav>
          <ul>
            <li>
              <NavLink href="#inicio" onClick={handleNavClick}>
                INICIO
              </NavLink>
            </li>
            <li>
              <NavLink href="#sobremi" onClick={handleNavClick}>
                SOBRE MI
              </NavLink>
            </li>
            <li>
              <NavLink href="#skills" onClick={handleNavClick}>
                SKILLS
              </NavLink>
            </li>
            <li>
              <NavLink href="#cv" onClick={handleNavClick}>
                CURRICULUM
              </NavLink>
            </li>
            <li>
              <NavLink href="#portfolio" onClick={handleNavClick}>
                PROYECTOS
              </NavLink>
            </li>
            <li>
              <NavLink href="#contacto" onClick={handleNavClick}>
                CONTACTO
              </NavLink>
            </li>
          </ul>
        </Nav>
      </HeaderWrapper>
    </ContainerHeader>
  );
};

export default Navbar;
