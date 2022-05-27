// React
import { Box, Button, Space } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { SubmitType } from 'components/CustomForm';
import {
  initialFormLanding,
  landingForm,
  validateFormLanding,
} from 'constants/forms/landing';
import dayjs from 'dayjs';
import React, { FC, Suspense, useRef, useState } from 'react';
import { createRequest } from 'services/appointment.service';
import { formatPrice } from 'utils/text';
import { CheckoutDiv } from './style';

const CustomForm = React.lazy(() => import('components/CustomForm'));

type typeCustomForm = React.ElementRef<typeof CustomForm>;

const LandingPage: FC = () => {
  const refForm = useRef<typeCustomForm>(null);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const register = () => {
    const dataForm = refForm.current?.onsubmit();
    if (dataForm) {
      setLoading(true);
      const dataSend = {
        owner_name: (dataForm?.ownerName as string) || '',
        owner_document: (dataForm?.ownerDocument as string) || '',
        pet_name: (dataForm?.petName as string) || '',
        pet_age: (dataForm?.petAge as string) || '',
        date: dayjs((dataForm?.time as string) || '').format('YYYY-MM-DD'),
        time: dayjs((dataForm?.time as string) || '').format('HH:mm'),
        pet_type: (dataForm?.petType as string) || '',
        price: total,
      };
      createRequest(dataSend).then((success: boolean) => {
        if (success) {
          refForm.current?.reset();
          setTotal(0);
          showNotification({
            title: 'Petición realizada con éxito',
            message: 'Se asignó su cita correctamente',
          });
        }
        setLoading(false);
      });
    }
  };

  const changeForm = (value: { [key: string]: SubmitType }) => {
    if (value?.petType === 'gato') {
      setTotal(10000);
    } else if (value?.petType === 'perro') {
      setTotal(20000);
    }
  };

  return (
    <Box sx={{ maxWidth: 350 }} mx="auto">
      <CheckoutDiv>
        <h2 data-testid="total-data">Total: {formatPrice(`${total}`)}</h2>
      </CheckoutDiv>
      <h2 id="header-landing" data-testid="header-landing">
        Solicitud de cita veterinaria
      </h2>
      <p>Diligencia todos los campos para asignar la cita</p>
      <Space h="md" />
      <Suspense fallback={<div>Loading ...</div>}>
        <CustomForm
          initialValues={initialFormLanding}
          fields={landingForm}
          validate={validateFormLanding}
          ref={refForm}
          onChange={changeForm}
        />
      </Suspense>
      <Space h="md" />
      <Button
        fullWidth
        onClick={register}
        data-testid="register-btn"
        loading={loading}
      >
        Registrar
      </Button>
    </Box>
  );
};

export default LandingPage;
