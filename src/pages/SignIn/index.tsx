import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import AuthContext from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input/index';
import Button from '../../components/Buttton/index';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { name } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data: Record<string, unknown>) => {
    try {
      formRef.current?.setErrors({}); // This is to clear all error messages

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail is required')
          .email('Please type a valid e-mail'),
        password: Yup.string().required('Password is required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);

      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Sign in below</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Enter</Button>

          <a href="forgot">Forgot my password</a>
        </Form>

        <a href="create">
          <FiLogIn />
          Create a new account
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
