import { NavLink } from 'react-router';  // Correct import for react-router
import styled from 'styled-components';
import logo from '../Logo.png';  // Import the logo


// Styled container for the top menu (ul)
const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;  // Adds space between the items
  margin: 0;
  padding: 0;
  justify-content: center;  // Centers the menu horizontally
  background-color: #333;  // Background color for the menu
  padding: 10px 0;  // Add padding at the top and bottom for spacing
  align-items: center;  // Vertically aligns items in the container
`;

// Styled container for the logo
const LogoContainer = styled.div`
  display: flex;
  align-items: center;  // Aligns logo vertically in the middle of the menu
  margin-right: 30px;  // Space between logo and the first menu item
`;

// Styled image for the logo
const Logo = styled.img`
  height: 50px;  // Adjust the size of the logo
  width: auto;
`;

// Styled list item (li)
const MenuItem = styled.li`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  padding: 8px 12px;
  transition: background-color 0.3s ease;  // Smooth transition on hover
`;

// Styled NavLink with active and hover states
const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;  // Remove default underline
  padding: 10px 15px;
  border-radius: 4px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #6A4C9C;  // Complementary color on hover
    color: white;
  }

  &.active {
    background-color: #2a2a2a;  // Dark background for active link
    color: #6A4C9C;  // Complementary color for the active state
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
