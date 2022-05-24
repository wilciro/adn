// React
import { Avatar, Box, Button, Divider, Space } from '@mantine/core';
import CustomForm from 'components/CustomForm';
import { SessionContext } from 'context/SessionContext';
import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'services/login.service';
import {
  initialFormLogin,
  loginForm,
  validateFormLogin,
} from 'constants/forms/login';

type typeCustomForm = React.ElementRef<typeof CustomForm>;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const refForm = useRef<typeCustomForm>(null);
  const {
    mutations: { setUsername },
  } = useContext(SessionContext);

  const login = () => {
    const dataForm = refForm.current?.onsubmit();
    if (dataForm) {
      setLoading(true);
      const dataSend = {
        username: (dataForm?.username as string) || '',
        password: (dataForm?.password as string) || '',
      };
      loginUser(dataSend).then((valid: boolean) => {
        setLoading(false);
        if (valid) {
          setUsername(dataSend.username);
          navigate('/dashboard');
        }
      });
    }
  };

  return (
    <Box sx={{ maxWidth: 350 }} mx="auto">
      <div style={{ textAlign: 'center' }}>
        <Avatar size="lg" color="indigo" style={{ margin: 'auto' }}>
          I
        </Avatar>
        <h2 id="title-login">Inicio de sesión</h2>
        <p>Ingresa tus datos y empieza la administración</p>
      </div>
      <Space h="md" />
      <CustomForm
        fields={loginForm}
        validate={validateFormLogin}
        initialValues={initialFormLogin}
        ref={refForm}
      />
      <Space h="md" />
      <Divider my="sm" />
      <Space h="md" />
      <Button
        onClick={login}
        loading={loading}
        id="login-button"
        data-testid="login-btn"
        fullWidth
      >
        Iniciar sesión
      </Button>
    </Box>
  );
};

export default LoginPage;
