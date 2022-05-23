// React
import { Box, Button, Space } from '@mantine/core';
import CustomForm from 'components/CustomForm';
import {
  initialFormLanding,
  landingForm,
  validateFormLanding,
} from 'constants/forms/landing';
import React, { FC, useRef, useState } from 'react';
import { createRequest } from 'services/appointment.service';
import { formatPrice } from 'utils/text';
import { CheckoutDiv } from './style';

type typeCustomForm = React.ElementRef<typeof CustomForm>;

const LandingPage: FC = () => {
  const refForm = useRef<typeCustomForm>(null);
  const [total, setTotal] = useState<number>(0);

  const register = () => {
    const dataForm = refForm.current?.onsubmit();
    if (dataForm) {
      const dataSend = {
        owner_name: (dataForm?.ownerName as string) || '',
        owner_document: (dataForm?.ownerDocument as string) || '',
        pet_name: (dataForm?.petName as string) || '',
        pet_age: (dataForm?.petAge as string) || '',
        date: (dataForm?.date as string) || '',
        time: (dataForm?.time as string) || '',
        pet_type: (dataForm?.petType as string) || '',
        price: total,
      };
      createRequest(dataSend).then((success: boolean) => {
        if (success) {
          refForm.current?.reset();
        }
      });
    }
  };

  return (
    <Box sx={{ maxWidth: 350 }} mx="auto">
      <CheckoutDiv>
        <h2>Total: {formatPrice(`${total}`)}</h2>
      </CheckoutDiv>
      <h2>Solicitud de cita veterinaria</h2>
      <p>Diligencia todos los campos para asignar la cita</p>
      <Space h="md" />
      <CustomForm
        initialValues={initialFormLanding}
        fields={landingForm}
        validate={validateFormLanding}
        ref={refForm}
      />
      <Space h="md" />
      <Button onClick={register} data-testid="register-btn">
        Registrar
      </Button>
    </Box>
  );
};

export default LandingPage;
