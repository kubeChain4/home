// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    color: #4CAF50;
  }
`;

const Header = () => (
  <Nav>
    <div>KubeChain</div>
    <div>
      <NavLink to="features" smooth={true} duration={500}>Features</NavLink>
      <NavLink to="about" smooth={true} duration={500}>About</NavLink>
      <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
    </div>
  </Nav>
);

export default Header;
