    // src/pages/Dashboard.js
    import React from 'react';
    import styled from 'styled-components';
    import { Link } from 'react-router-dom';
    import Sidebar from '../components/Sidebar'; // Import the Sidebar component

    const DashboardContainer = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: 'Arial, sans-serif';
    `;

    const MainContent = styled.div`
    flex: 1;
    padding-left: 270px; /* Adjusted to account for sidebar width */
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    height: 100vh; /* Full viewport height */
    `;

    const Header = styled.h1`
    font-size: 2.5em;
    color: #333;
    text-align: center; /* Ensure text is centered horizontally */
    `;

    const Dashboard = () => {
    return (
        <DashboardContainer>
        <Sidebar /> {/* Include the Sidebar component */}
        <MainContent>
            <Header>Welcome to Your Dashboard</Header>
        </MainContent>
        </DashboardContainer>
    );
    };

    export default Dashboard;
