import React from 'react';
import { Container, Form, Button } from '../styles';

const Login = () => {
  return (
    <Container>
      <h2>Login</h2>
      <Form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
