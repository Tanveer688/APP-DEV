import React from 'react';
import styled from 'styled-components';
import InteractiveElement from './InteractiveElement';

const StorybookContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const StorybookTitle = styled.h3`
  font-size: 1.5em;
  color: #333;
`;

const StorybookDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const Storybook = ({ title, description }) => {
  return (
    <StorybookContainer>
      <StorybookTitle>{title}</StorybookTitle>
      <StorybookDescription>{description}</StorybookDescription>
      <InteractiveElement text="Press here" />
      <InteractiveElement text="Tap me" />
      <InteractiveElement text="Slide to reveal" />
      {/* Add more interactive elements as needed */}
    </StorybookContainer>
  );
};

export default Storybook;
