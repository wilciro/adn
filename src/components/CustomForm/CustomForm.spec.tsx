import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CustomForm from '.';
import {
  initialFormLogin,
  loginForm,
  validateFormLogin,
} from '../../constants/forms/login';

describe('CustomForm tests', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <CustomForm initialValues={{}} fields={[]} validate={{}} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should find username field', () => {
    render(<CustomForm initialValues={{}} fields={loginForm} validate={{}} />);
    expect(screen.getByTestId(loginForm[0].name)).toBeTruthy();
  });

  it('should find password field', () => {
    render(<CustomForm initialValues={{}} fields={loginForm} validate={{}} />);
    expect(screen.getByTestId(loginForm[1].name)).toBeTruthy();
  });

  it('should be required password and username', async () => {
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

  it('should no show error of required when write', async () => {
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
});
