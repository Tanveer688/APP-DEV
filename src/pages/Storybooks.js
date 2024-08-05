import React from 'react';
import styled from 'styled-components';
import Storybook from '../components/Storybook';

const StorybooksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5em;
  color: #333;
`;

const StorybookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const storybooksData = [
  { title: 'Press Here', description: 'An interactive book with fun activities.' },
  { title: 'Mix It Up!', description: 'A colorful and engaging interactive story.' },
  { title: 'Let\'s Play', description: 'A playful interactive book for kids.' },
  { title: 'Tap the Magic Tree', description: 'A magical interactive book.' },
  { title: '',description:''},
  { title: '',description:''},
  // Add more storybooks data as needed
];

const Storybooks = () => {
  return (
    <StorybooksContainer>
      <Header>Interactive Storybooks</Header>
      <StorybookGrid>
        {storybooksData.map((storybook, index) => (
          <Storybook key={index} title={storybook.title} description={storybook.description} />
        ))}
      </StorybookGrid>
    </StorybooksContainer>
  );
};

export default Storybooks;
