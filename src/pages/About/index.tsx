// React
import { Box, Button } from '@mantine/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AboutDiv } from './style';

const AboutPage: FC = () => {
  return (
    <AboutDiv>
      <img src="/assets/image.png" alt="logo of vetapp" />
      <div>
        <h2 data-testid='about-header' id="about-header">Sobre Vet App</h2>
        <p>
          VetApp es una aplicación desarrollada como proceso de inducción para
          la empresa Ceiba Software.
        </p>
        <p>
          VetApp está diseñado para permitir el agendamiento de citas médicas
          veterinarias mostrando su precio en tiempo real dependiendo del tipo
          de mascota a valorar.
        </p>
        <Link to="/">
          <Button>Agendar cita</Button>
        </Link>
      </div>
    </AboutDiv>
  );
};

export default AboutPage;
