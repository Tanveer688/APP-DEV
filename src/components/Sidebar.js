// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  height: calc(100vh - 60px); /* Adjust for navbar height */
  background: #f4f4f4;
  padding: 20px;
  border-right: 2px solid #ddd;
  position: fixed; /* Fixed position to stay on the left */
  top: 60px; /* Align below the navbar */
  left: 0; /* Align to left */
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
  }
`;

const LogoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 1.2em;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #c82333;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data (e.g., token, user info)
    // For example:
    localStorage.removeItem('authToken'); // Clear the auth token from local storage
    // Redirect to login page
    navigate('/login');
  };

  return (
    <SidebarContainer>
      <SidebarLink to="/dashboard">Dashboard Home</SidebarLink>
      <SidebarLink to="/profile">Profile</SidebarLink> {/* Add link to profile page */}
      <SidebarLink to="/storybooks">My Storybooks</SidebarLink>
      <SidebarLink to="/progress">Educational Progress</SidebarLink>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
