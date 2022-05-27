import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CustomForm, { CustomFormFieldProps } from '.';

const loginForm: Array<CustomFormFieldProps> = [
  {
    label: 'Nombre de usuario',
    name: 'username',
    placeholder: 'Ingrese el nombre de usuario',
    type: 'text',
    required: {
      value: true,
      message: 'Por favor ingrese el nombre de usuario',
    },
  },
  {
    label: 'Contraseña',
    name: 'password',
    placeholder: 'Ingrese la contraseña',
    type: 'password',
    required: {
      value: true,
      message: 'Por favor ingrese la contraseña',
    },
  },
];

const validateFormLogin = {
  username: (value: string) =>
    `${value}`.length > 0 ? null : 'Por favor ingrese el nombre de usuario',
  password: (value: string) =>
    `${value}`.length > 0 ? null : 'Por favor ingrese la contraseña',
};

const initialFormLogin = {
  username: '',
  password: '',
};

describe('CustomForm tests', () => {
  test('should find all fields', () => {
    render(<CustomForm initialValues={{}} fields={loginForm} validate={{}} />);
    expect(screen.getByTestId('username')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });

  test('should be required password and username', async () => {
    const refForm = {
      current: {
        onsubmit: jest.fn(),
        reset: jest.fn(),
      },
    };
    render(
      <div>
        <CustomForm
          fields={loginForm}
          validate={validateFormLogin}
          initialValues={initialFormLogin}
          ref={refForm}
        />
        <button
          type="submit"
          data-testid="login-btn"
          onClick={(e) => {
            const test = refForm.current?.onsubmit();
          }}
        >
          Login
        </button>
      </div>,
    );
    fireEvent.click(screen.getByTestId('login-btn'));
    expect(
      screen.getByText('Por favor ingrese el nombre de usuario'),
    ).toBeTruthy();
    expect(screen.getByText('Por favor ingrese la contraseña')).toBeTruthy();
  });

  test('should no show error of required when write', async () => {
    const refForm = {
      current: {
        onsubmit: jest.fn(),
        reset: jest.fn(),
      },
    };
    render(
      <div>
        <CustomForm
          fields={[
            ...loginForm,
            {
              label: 'Test',
              type: 'no_exists',
              name: 'test',
            },
          ]}
          validate={validateFormLogin}
          initialValues={initialFormLogin}
          ref={refForm}
        />
        <button
          type="submit"
          data-testid="login-btn"
          onClick={(e) => refForm.current?.onsubmit()}
        >
          Login
        </button>
      </div>,
    );
    fireEvent.change(screen.getByTestId(loginForm[0].name), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByTestId(loginForm[1].name), {
      target: { value: 'admin' },
    });

    fireEvent.click(screen.getByTestId('login-btn'));
    expect(
      screen.queryByText('Por favor ingrese el nombre de usuario'),
    ).toBeNull();
    expect(screen.queryByText('Por favor ingrese la contraseña')).toBeNull();
  });
  test('should be required password and username', async () => {
    const refForm = {
      current: {
        onsubmit: jest.fn(),
        reset: jest.fn(),
      },
    };
    render(
      <div>
        <CustomForm
          fields={loginForm}
          validate={validateFormLogin}
          initialValues={initialFormLogin}
          ref={refForm}
        />
        <button
          type="submit"
          data-testid="login-btn"
          onClick={(e) => {
            const test = refForm.current?.onsubmit();
          }}
        >
          Login
        </button>
      </div>,
    );
    fireEvent.change(screen.getByTestId(loginForm[0].name), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByTestId(loginForm[1].name), {
      target: { value: 'admin' },
    });
    await waitFor(() => {
      refForm.current.reset();
      fireEvent.click(screen.getByTestId('login-btn'));
      expect(
        screen.getByText('Por favor ingrese el nombre de usuario'),
      ).toBeTruthy();
      expect(screen.getByText('Por favor ingrese la contraseña')).toBeTruthy();
    });
  });
});
