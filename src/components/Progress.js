import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const ProgressContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial, sans-serif';
`;

const MainContent = styled.div`
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the progress cards */
`;

const Header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Section = styled.section`
  width: 100%;
  max-width: 600px; /* Optional: Limit the width of the progress cards */
  margin-bottom: 40px;
`;

const ProgressCard = styled.div`
  background: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ProgressTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #333;
`;

const ProgressBarContainer = styled.div`
  background: #e9ecef;
  border-radius: 5px;
  height: 20px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  background: #007bff;
  height: 100%;
  width: ${(props) => props.width || '0%'};
  transition: width 0.3s ease;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Progress = () => {
  // Sample progress data including book titles and their completion status
  const [progressData, setProgressData] = useState([
    { title: '', percentage: 10 },
    { title: 'Mix It Up!', percentage: 50 },
    { title: 'Let\'s Play', percentage: 100},
    { title: 'Tap the Magic Tree', percentage: 20},
    { title: '',percentage: 30},
  ]);

  return (
    <ProgressContainer>
      <Sidebar />
      <MainContent>
        <Header>Educational Progress</Header>

        {progressData.map((item, index) => (
          <Section key={index}>
            <ProgressCard>
              <ProgressTitle>{item.title}</ProgressTitle>
              <ProgressBarContainer>
                <ProgressBar width={`${item.percentage}%`} />
              </ProgressBarContainer>
              <Paragraph>{item.percentage}% Complete</Paragraph>
            </ProgressCard>
          </Section>
        ))}

        <Section>
          <Link to="/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
        </Section>
      </MainContent>
    </ProgressContainer>
  );
};

export default Progress;
