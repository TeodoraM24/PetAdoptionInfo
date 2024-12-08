// src/pages/About.js
import styled from 'styled-components';

// Container for the About page content
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-color: var(--background-color, #f9f9f9);  // Background color
  min-height: 100vh;
`;

// Styled heading for the page
const Heading = styled.h1`
  color: var(--primary-color, #4CAF50);  // Primary color
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

// Styled paragraph for the content
const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin-top: 20px;
  color: var(--text-color, #555);  // Text color
`;

function About() {
  return (
    <AboutContainer>
      <Heading>About the PetAdoptionAPI</Heading>
      <Paragraph>
        The PetAdoptionAPI is focused on raising awareness for street dogs, primarily from Serbia, who are still living on the streets. These real street dogs, whose images were provided by a friend, face harsh conditions on a daily basis. 
      </Paragraph>
      <Paragraph>
        This project aims to highlight their situation and inspire action, whether through supporting animal shelters, spreading awareness, or fostering a rescue mentality. It is not about adoption but about giving these animals a voice and encouraging change.
      </Paragraph>
      <Paragraph>
        By showcasing these dogs, we hope to inspire compassion and action to improve the lives of street animals around the world.
      </Paragraph>
      <Paragraph>Fron end design ideas:</Paragraph>
      <Paragraph>The page should display all available dogs for adoption with the picutre of the dog and a name, together with a link to learn more information about the specific dog. It should display their adoption status and also option for sending an inquiery for a specific dog that admin can review. Users only have options to see the dogs and send inquieries. Admin can delete dogs, update and review the inquieries.</Paragraph>
    </AboutContainer>
  );
}

export default About;
