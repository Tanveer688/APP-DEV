import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  font-family: 'Arial, sans-serif';
`;

const Header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const Subheader = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Header>About Us</Header>
      <Subheader>Our Mission</Subheader>
      <Paragraph>
        At Interactive Kids Storybooks, our mission is to inspire a love of reading and learning in children through engaging, interactive stories. We believe that storytelling is a powerful tool to ignite imagination, curiosity, and creativity in young minds.
      </Paragraph>
      <Subheader>What We Do</Subheader>
      <Paragraph>
        We create interactive storybooks and educational content that combine the joy of reading with fun, hands-on activities. Our stories are designed to be immersive and engaging, helping children to not only read but also interact with the story in a meaningful way.
      </Paragraph>
      <Paragraph>
        Our educational content covers a wide range of subjects, from basic literacy and numeracy to more complex concepts in science and social studies. Each storybook is crafted with care to ensure that it is both entertaining and educational.
      </Paragraph>
      <Subheader>Our Team</Subheader>
      <Paragraph>
        Our team is made up of passionate educators, talented writers, and skilled developers who are dedicated to creating the best possible experience for children. We are committed to continuous innovation and improvement, always looking for new ways to make learning fun and effective.
      </Paragraph>
      <Subheader>Join Us</Subheader>
      <Paragraph>
        Join us on our journey to create a world where children can explore, learn, and grow through the magic of interactive storytelling. Together, we can make reading and learning an adventure that every child looks forward to.
      </Paragraph>
    </AboutUsContainer>
  );
};

export default AboutUs;
