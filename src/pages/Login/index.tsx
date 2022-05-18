// React
import { Avatar, Box, Button, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import { CustomForm } from 'components/CustomForm';
import { loginForm } from 'constants/forms/login';
import React from 'react';

export const LoginPage: React.FC = () => {

  const login = () => {
    const a = 10
  }

  return (    
    <Box sx={{ maxWidth: 350 }} mx="auto">
      <Avatar size="lg">I</Avatar>
      <h2>Inicio de sesión</h2>
      <p>Ingresa tus datos y empieza la administración</p>
      <Space h="md" />
      <CustomForm 
        fields={loginForm}
      />
      <Space h="md" />
      <Button onClick={login}>Iniciar sesión</Button>
    </Box>
  );
};
