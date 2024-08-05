import React from 'react';
import { Container, Form, Button } from '../styles';

const Register = () => {
  return (
    <Container>
      <h2>Register</h2>
      <Form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
