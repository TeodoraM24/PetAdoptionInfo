// src/pages/Endpoints.js
import styled from 'styled-components';

// Container for the Endpoints page content
const EndpointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-color: var(--background-color, #f9f9f9);  // Background color
  min-height: 100vh;
  color: var(--text-color, #333);
`;

// Styled heading for the page
const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: var(--primary-color, #4CAF50);  // Primary color
`;

// Styled subheading for section titles
const SubHeading = styled.h2`
  font-size: 1.8rem;
  margin: 30px 0 10px 0;
  color: #6A4C9C;
  text-align: center;
`;

// Styled table for endpoints
const StyledTable = styled.table`
  width: 90%;
  max-width: 1000px;
  margin-bottom: 30px;
  border-collapse: collapse;
  text-align: left;
  border: 1px solid #ddd;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  th {
    background-color: var(--primary-color, #4CAF50);
    color: white;
  }

  td {
    background-color: #f9f9f9;
  }

  tr:nth-child(even) td {
    background-color: #f1f1f1;
  }
`;

function Endpoints() {
  return (
    <EndpointsContainer>
      <Heading>API Endpoints</Heading>
      <p>This page provides information about the different endpoints available in the PetAdoptionAPI.</p>

      {/* Dog-related Routes */}
      <SubHeading>Dog Endpoints</SubHeading>
      <StyledTable>
        <thead>
          <tr>
            <th>Method</th>
            <th>URL</th>
            <th>Request Body (JSON)</th>
            <th>Response (JSON)</th>
            <th>Error (e)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>POST</td>
            <td>/api/dogs</td>
            <td>{`{ "name": "Dog Name", "breed": "Breed", "age": 3 }`}</td>
            <td>{`{ "id": 1, "name": "Dog Name", "breed": "Breed", "age": 3 }`}</td>
            <td>(e1) - Missing required fields</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/api/dogs</td>
            <td>None</td>
            <td>{`[ { "id": 1, "name": "Dog Name", "breed": "Breed", "age": 3 }, {...} ]`}</td>
            <td>(e2) - No dogs found</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/api/dogs/{`id`}</td>
            <td>None</td>
            <td>{`{ "id": 1, "name": "Dog Name", "breed": "Breed", "age": 3 }`}</td>
            <td>(e3) - Dog with this ID not found</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>/api/dogs/{`id`}</td>
            <td>{`{ "name": "Updated Name", "breed": "Updated Breed", "age": 4 }`}</td>
            <td>{`{ "id": 1, "name": "Updated Name", "breed": "Updated Breed", "age": 4 }`}</td>
            <td>(e4) - Dog with this ID not found</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>/api/dogs/{`id`}</td>
            <td>None</td>
            <td>None</td>
            <td>(e5) - Dog with this ID not found</td>
          </tr>
        </tbody>
      </StyledTable>

      {/* Authentication Routes */}
      <SubHeading>Authentication Endpoints</SubHeading>
      <StyledTable>
        <thead>
          <tr>
            <th>Method</th>
            <th>URL</th>
            <th>Request Body (JSON)</th>
            <th>Response (JSON)</th>
            <th>Error (e)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>/api/auth/healthcheck</td>
            <td>None</td>
            <td>{`{ "status": "OK" }`}</td>
            <td>(e6) - Server not responding</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/api/auth/test</td>
            <td>None</td>
            <td>{`{ "msg": "Hello from Open" }`}</td>
            <td>(e7) - Error in response</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/api/auth/login</td>
            <td>{`{ "username": "user", "password": "password" }`}</td>
            <td>{`{ "token": "abc123xyz" }`}</td>
            <td>(e8) - Invalid credentials</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/api/auth/register</td>
            <td>{`{ "username": "newuser", "password": "password" }`}</td>
            <td>{`{ "msg": "User registered successfully" }`}</td>
            <td>(e9) - Username already taken</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/api/auth/user/addrole</td>
            <td>{`{ "username": "user", "role": "admin" }`}</td>
            <td>{`{ "msg": "Role added successfully" }`}</td>
            <td>(e10) - Admin role required</td>
          </tr>
        </tbody>
      </StyledTable>

      {/* Secured Routes */}
      <SubHeading>Secured Endpoints (Requires Auth)</SubHeading>
      <StyledTable>
        <thead>
          <tr>
            <th>Method</th>
            <th>URL</th>
            <th>Request Body (JSON)</th>
            <th>Response (JSON)</th>
            <th>Error (e)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>/api/protected/user_demo</td>
            <td>None</td>
            <td>{`{ "msg": "Hello from USER Protected" }`}</td>
            <td>(e11) - Unauthorized access</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/api/protected/admin_demo</td>
            <td>None</td>
            <td>{`{ "msg": "Hello from ADMIN Protected" }`}</td>
            <td>(e12) - Unauthorized access</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/api/protected/master_demo</td>
            <td>None</td>
            <td>{`{ "msg": "Hello from MASTER Protected" }`}</td>
            <td>(e13) - Unauthorized access</td>
          </tr>
        </tbody>
      </StyledTable>
    </EndpointsContainer>
  );
}

export default Endpoints;
