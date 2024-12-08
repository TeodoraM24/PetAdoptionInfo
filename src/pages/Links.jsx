// src/pages/Links.js
import styled from 'styled-components';

// Container for the Links page content
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  min-height: 100vh;
  color: #333;  // Dark text color for better readability
  font-family: Arial, sans-serif;
`;

// Styled heading for the page
const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: var(--primary-color, #4CAF50);
  font-weight: 600;
`;

// Styled subheading for the paragraph
const SubHeading = styled.p`
  font-size: 1.1rem;
  margin: 20px 0;
  color: #555;  // Light gray color for text
  text-align: center;
  max-width: 800px;
`;

// Styled unordered list with centered links
const LinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 800px;
`;

// Styled list items
const ListItem = styled.li`
  margin: 10px 0;
  font-size: 1.1rem;
  color: #333;  // Dark text color for readability
`;

// Styled links with subtle hover effect
const StyledLink = styled.a`
  color: #007bff;  // Blue color for the links
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

function Links() {
  return (
    <LinksContainer>
      <Heading>Links</Heading>
      <SubHeading>Here are some useful links related to PetAdoptionAPI:</SubHeading>
      <LinksList>
        <ListItem>
          <StyledLink
            href="https://github.com/Tobitastik/SP2-API/tree/master"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </StyledLink>
        </ListItem>
        <SubHeading>Keep in mind the backend needs some adjusting in the security.</SubHeading>
        <ListItem>
          <StyledLink
            href="https://petadoption.schoolwork.dk/api/routes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed backend API
          </StyledLink>
        </ListItem>
      </LinksList>
    </LinksContainer>
  );
}

export default Links;
