
import styled from 'styled-components';

// Container for the Home page content
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-color: var(--background-color, #f9f9f9);  
  min-height: 100vh;
`;

// Styled heading for the page
const Heading = styled.h1`
  color: var(--primary-color, #4CAF50);  
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
`;

// Styled paragraph for the introductory text
const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin-top: 20px;
  color: var(--text-color, #555);  
`;

function Home() {
  return (
    <HomeContainer>
      <Heading>Home</Heading>
      <Paragraph>
        Welcome to the PetAdoptionAPI, this page is designed to help you undarstand the idea behind the API.
      </Paragraph>
    </HomeContainer>
  );
}

export default Home;
