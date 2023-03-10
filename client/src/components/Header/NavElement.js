import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background: #07437E;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
`
export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    font-weight: bold;
  }
`
export const Title = styled.div`
  display: block;
  color: #ffffff;
  display: flex;
  align-items: center
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  
`