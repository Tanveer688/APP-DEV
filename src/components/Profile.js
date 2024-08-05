// src/pages/Profile.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial, sans-serif';
`;

const Header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 15px;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
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

const ProfilePhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const FileInput = styled.input`
  margin-top: 10px;
`;

const Profile = () => {
  const [name, setName] = useState('Mohamed Tanveer');
  const [email, setEmail] = useState('mohamedtanveer21@gmail.com');
  const [profilePhoto, setProfilePhoto] = useState('/path/to/default/profile-photo.jpg'); // Default profile photo

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Logic to save profile information
    alert('Profile updated!');
  };

  return (
    <ProfileContainer>
      <Header>Profile Information</Header>

      <ProfilePhotoContainer>
        <ProfilePhoto src={profilePhoto} alt="Profile Photo" />
        <FileInput type="file" accept="image/*" onChange={handlePhotoChange} />
      </ProfilePhotoContainer>

      <Section>
        <SectionTitle>Profile Details</SectionTitle>
        <Paragraph>
          <strong>Name:</strong>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Paragraph>
        <Paragraph>
          <strong>Email:</strong>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Paragraph>
        <Button onClick={handleSave}>Save Changes</Button>
      </Section>

      <Section>
        <Link to="/dashboard">
          <Button>Back to Dashboard</Button>
        </Link>
      </Section>
    </ProfileContainer>
  );
};

export default Profile;
    