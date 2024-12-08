import { NavLink } from 'react-router';  
import styled from 'styled-components';
import logo from '../Logo.png';  


// Styled container for the top menu (ul)
const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;  
  margin: 0;
  padding: 0;
  justify-content: center;  
  background-color: #333;  
  padding: 10px 0;  
  align-items: center;  
`;

// Styled container for the logo
const LogoContainer = styled.div`
  display: flex;
  align-items: center;  
  margin-right: 30px;  
`;

// Styled image for the logo
const Logo = styled.img`
  height: 50px;  
  width: auto;
`;

// Styled list item (li)
const MenuItem = styled.li`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  padding: 8px 12px;
  transition: background-color 0.3s ease;  
`;

// Styled NavLink with active and hover states
const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;  
  padding: 10px 15px;
  border-radius: 4px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #6A4C9C;  
    color: white;
  }

  &.active {
    background-color: #2a2a2a;  
    color: #6A4C9C;  
  }
`;

function TopMenu() {
  return (
    <nav>
      <StyledMenu>
        {/* Logo Section */}
        <LogoContainer>
          <Logo src={logo} alt="PetAdoptionAPI Logo" />
        </LogoContainer>

        {/* Menu Items */}
        <MenuItem>
          <StyledNavLink to='/'>Home</StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to='/about'>About</StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to='/endpoints'>Endpoints</StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to='/links'>Links</StyledNavLink>
        </MenuItem>
      </StyledMenu>
    </nav>
  );
}

export default TopMenu;
