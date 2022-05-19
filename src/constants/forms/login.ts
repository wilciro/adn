import { CustomFormFieldProps, ValidateProps } from 'components/CustomForm';

export const loginForm : Array<CustomFormFieldProps> = [
    {
        'label': 'Nombre de usuario',
        'name': 'username',
        'placeholder': 'Ingrese el nombre de usuario',
        'type' : 'text',
        'required': {
            'value' : true,
            'message' : 'Por favor ingrese el nombre de usuario'
        }
    },
    {
        'label': 'Contraseña',
        'name': 'password',
        'placeholder': 'Ingrese la contraseña',
        'type' : 'password',
        'required': {
            'value' : true,
            'message' : 'Por favor ingrese la contraseña'
        }
    }
];

export const validateFormLogin = {
    'username' : (value: string) => (`${value}`.length > 0 ? null: 'Por favor ingrese el nombre de usuario'),
    'password' : (value: string) => (`${value}`.length > 0 ? null:  'Por favor ingrese la contraseña')
};

export const initialFormLogin = {
    'username' : '',
    'password' : ''
};
