import React from 'react'
import { PrimaryNav, MenuLink, Menu, Title } from './NavElement'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Title>Desafío React Node</Title>
        <Menu>
          <MenuLink to="/" activestyle="true">
            Home
          </MenuLink>
          <MenuLink to="/files" activestyle="true">
            Archivos
          </MenuLink>
          <MenuLink to="/credits" activestyle="true">
            About
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>   
  )
}
export default Navbar