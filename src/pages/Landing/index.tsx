// React
import { Box, Button, Space } from "@mantine/core"
import { CustomForm } from "components/CustomForm"
import { landingForm } from "constants/forms/landing"
import React, { FC } from "react"

const LandingPage: FC = () => {

    const register = () => {
        const a = 10
    }

    return (
        <Box sx={{ maxWidth: 350 }} mx="auto">
            <h2>Solicitud de cita veterinaria</h2>
            <p>Diligencia todos los campos para asignar la cita</p>
            <Space h="md" />
            <CustomForm 
                fields={landingForm}
            />
            <Space h="md" />
            <Button onClick={register}>Registrar</Button>
        </Box>
    )
}

export default LandingPage