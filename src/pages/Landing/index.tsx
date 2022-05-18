// React
import { Box, Button, Space } from "@mantine/core"
import CustomForm from "components/CustomForm"
import { landingForm, validateFormLanding } from "constants/forms/landing"
import React, { FC, useRef } from "react"

type typeCustomForm = React.ElementRef<typeof CustomForm>;

const LandingPage: FC = () => {
    const refForm = useRef<typeCustomForm>(null)

    const register = () => {
        refForm.current?.onsubmit();
    }

    return (
        <Box sx={{ maxWidth: 350 }} mx="auto">
            <h2>Solicitud de cita veterinaria</h2>
            <p>Diligencia todos los campos para asignar la cita</p>
            <Space h="md" />
            <CustomForm 
                initialValues={{date: ""}}
                fields={landingForm}
                validate={validateFormLanding}
                ref={refForm}
            />
            <Space h="md" />
            <Button onClick={register}>Registrar</Button>
        </Box>
    )
}

export default LandingPage