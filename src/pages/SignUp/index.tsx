import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input/index';
import Button from '../../components/Buttton/index';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Sign up below</h1>

        <Input name="name" icon={FiUser} placeholder="Name" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Sign Up</Button>
      </form>

      <a href="create">
        <FiArrowLeft />
        Back to sign in
      </a>
    </Content>
  </Container>
);

export default SignUp;
