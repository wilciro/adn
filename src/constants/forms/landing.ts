import { CustomFormFieldProps } from "components/CustomForm";

export const landingForm : Array<CustomFormFieldProps> = [
    {
        "label": "Nombre del dueño",
        "name": "owner_name",
        "placeholder": "Ingrese el nombre del dueño",
        "type" : "text",
        "required": {
            "value" : true,
            "message" : "Por favor ingrese el nombre del dueño"
        }
    },
    {
        "label": "Documento del dueño",
        "name": "owner_document",
        "placeholder": "Ingrese el documento del dueño",
        "type" : "text",
        "required": {
            "value" : true,
            "message" : "Por favor ingrese el documento del dueño"
        }
    },
    {
        "label": "Nombre de la mascota",
        "name": "pet_name",
        "placeholder": "Ingrese el nombre de la mascota",
        "type" : "text",
        "required": {
            "value" : true,
            "message" : "Por favor ingrese el nombre de la mascota"
        }
    },
    {
        "label": "Edad de la mascota",
        "name": "pet_age",
        "placeholder": "Ingrese la edad de la mascota",
        "type" : "text",
        "required": {
            "value" : true,
            "message" : "Por favor ingrese la edad de la mascota"
        }
    },
    {
        "label": "Fecha de la cita",
        "name": "date",
        "placeholder": "Seleccione la fecha de la cita",
        "type" : "text",
        "required": {
            "value" : true,
            "message" : "Por favor seleccione la fecha de la cita"
        }
    }
]