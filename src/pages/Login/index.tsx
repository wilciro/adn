// React
import { Avatar, Box, Button, Space } from '@mantine/core';
import CustomForm from 'components/CustomForm';
import { initialFormLogin, loginForm, validateFormLogin } from 'constants/forms/login';
import { SessionContext } from 'context/SessionContext';
import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'services/login.service';

type typeCustomForm = React.ElementRef<typeof CustomForm>;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const { mutations: {setUsername} } = useContext(SessionContext);
  const refForm = useRef<typeCustomForm>(null);

  const login = () => {
    const dataForm = refForm.current?.onsubmit();
    if(dataForm) {
      setLoading(true);
      const dataSend = {
        'username' : dataForm?.username as string || '',
        'password' : dataForm?.password as string || ''
      };
      loginUser(dataSend).then((valid: boolean) => {
        setLoading(false);
        if(valid) {
          setUsername(dataSend.username);
          navigate('/dashboard');
        }
      });
    }
  };

  return (    
    <Box sx={{ maxWidth: 350 }} mx="auto">
      <Avatar size="lg">I</Avatar>
      <h2 id="title-login">Inicio de sesión</h2>
      <p>Ingresa tus datos y empieza la administración</p>
      <Space h="md" />
      <CustomForm 
        fields={loginForm}
        validate={validateFormLogin}
        initialValues={initialFormLogin}
        ref={refForm}
      />
      <Space h="md" />
      <Button onClick={login} loading={loading} id="login-button">Iniciar sesión</Button>
    </Box>
  );
};

export default LoginPage;
