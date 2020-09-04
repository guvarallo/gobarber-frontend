import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Sign in below</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Password" />

        <button type="submit">Enter</button>

        <a href="forgot">Forgot my password</a>
      </form>

      <a href="create">
        <FiLogIn />
        Create a new account
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
