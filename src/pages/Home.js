import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-image: url(../assests/2.jpg);
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #666;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin: 20px;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Interactive Storybooks</Title>
      <Description>Explore a world of interactive storybooks designed to engage and educate children.</Description>
      <Button to="/storybooks">Explore Storybooks</Button>
      <Button to="/login">Login</Button>
      <Button to="/register">Register</Button>
    </HomeContainer>
  );
};

export default Home;