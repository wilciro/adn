// React
import { Avatar, Box, Button, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import CustomForm from 'components/CustomForm';
import { initialFormLogin, loginForm, validateFormLogin } from 'constants/forms/login';
import React, { useRef } from 'react';

type typeCustomForm = React.ElementRef<typeof CustomForm>;

export const LoginPage: React.FC = () => {
  const refForm = useRef<typeCustomForm>(null)

  const login = () => {
    refForm.current?.onsubmit();
  }

  return (    
    <Box sx={{ maxWidth: 350 }} mx="auto">
      <Avatar size="lg">I</Avatar>
      <h2>Inicio de sesión</h2>
      <p>Ingresa tus datos y empieza la administración</p>
      <Space h="md" />
      <CustomForm 
        fields={loginForm}
        validate={validateFormLogin}
        initialValues={initialFormLogin}
        ref={refForm}
      />
      <Space h="md" />
      <Button onClick={login}>Iniciar sesión</Button>
    </Box>
  );
};
