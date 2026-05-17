import styled from '@emotion/styled'
import { NavLink, Outlet } from 'react-router-dom'
import { theme } from '../styles/theme'

const navItems = [
  { path: '/', label: 'Home', end: true },
  { path: '/line', label: 'Line Chart' },
  { path: '/bar', label: 'Bar Chart' },
  { path: '/area', label: 'Area Chart' },
  { path: '/pie', label: 'Pie Chart' },
  { path: '/dashboard', label: 'Dashboard' },
]

export default function Layout() {
  return (
    <Wrapper>
      <Nav>
        <NavTitle>Graph Practice</NavTitle>
        <NavList>
          {navItems.map(({ path, label, end }) => (
            <li key={path}>
              <StyledNavLink to={path} end={end}>
                {label}
              </StyledNavLink>
            </li>
          ))}
        </NavList>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${theme.colors.background};
`

const Nav = styled.nav`
  width: 200px;
  min-height: 100vh;
  background: ${theme.colors.surface};
  border-right: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.lg};
  flex-shrink: 0;
`

const NavTitle = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${theme.spacing.lg};
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius};
  color: ${theme.colors.text.secondary};
  text-decoration: none;
  font-size: 14px;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${theme.colors.background};
    color: ${theme.colors.text.primary};
  }

  &.active {
    background: ${theme.colors.primary};
    color: #fff;
  }
`

const Main = styled.main`
  flex: 1;
  padding: ${theme.spacing.xl};
  overflow: auto;
`
