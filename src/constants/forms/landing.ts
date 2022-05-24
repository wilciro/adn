import { CustomFormFieldProps } from 'components/CustomForm';

export const landingForm: Array<CustomFormFieldProps> = [
  {
    label: 'Nombre del dueño',
    name: 'ownerName',
    placeholder: 'Ingrese el nombre del dueño',
    type: 'text',
    required: {
      value: true,
      message: 'Por favor ingrese el nombre del dueño',
    },
  },
  {
    label: 'Documento del dueño',
    name: 'ownerDocument',
    placeholder: 'Ingrese el documento del dueño',
    type: 'text',
    required: {
      value: true,
      message: 'Por favor ingrese el documento del dueño',
    },
  },
  {
    label: 'Nombre de la mascota',
    name: 'petName',
    placeholder: 'Ingrese el nombre de la mascota',
    type: 'text',
    required: {
      value: true,
      message: 'Por favor ingrese el nombre de la mascota',
    },
  },
  {
    label: 'Edad de la mascota',
    name: 'petAge',
    placeholder: 'Ingrese la edad de la mascota',
    type: 'number',
    required: {
      value: true,
      message: 'Por favor ingrese la edad de la mascota',
    },
  },
  {
    label: 'Tipo de mascota',
    name: 'petType',
    placeholder: 'Seleccione el tipo de mascota',
    type: 'select',
    data: [
      { value: 'gato', label: 'Gato' },
      { value: 'perro', label: 'Perro' },
    ],
    required: {
      value: true,
      message: 'Por favor seleccione el tipo de mascota',
    },
  },
  {
    label: 'Fecha de la cita',
    name: 'date',
    placeholder: 'Seleccione la fecha de la cita',
    type: 'date',
    required: {
      value: true,
      message: 'Por favor seleccione la fecha de la cita',
    },
  },
  {
    label: 'Hora de la cita',
    name: 'time',
    placeholder: 'Seleccione la hora de la cita',
    type: 'time',
    required: {
      value: true,
      message: 'Por favor seleccione la hora de la cita',
    },
  },
];

export const validateFormLanding = {
  ownerName: (value: string) =>
    `${value}`.length > 0 ? null : 'Por favor ingrese el nombre del dueño',
  ownerDocument: (value: string) =>
    `${value}`.length > 0 ? null : 'Por favor ingrese el documento',
  petName: (value: string) =>
    `${value}`.length > 0 ? null : 'Por favor ingrese el nombre',
  petAge: (value: number) =>
    value > 0 && value < 50 ? null : 'Por favor ingrese una edad válida',
  date: (value: string) =>
    `${value}`.length > 0 ? null : 'Por favor ingrese la fecha',
  time: (value: Date) =>
    value.getHours() > 8 && value.getHours() < 17
      ? null
      : 'El rango horario es de 8 am - 5 pm',
  petType: (value: string) =>
    `${value}`.length > 0 ? null : 'Por favor seleccione el tipo',
};

export const initialFormLanding = {
  ownerName: '',
  ownerDocument: '',
  petName: '',
  petAge: 0,
  date: null,
  time: new Date(),
  petType: null,
};
