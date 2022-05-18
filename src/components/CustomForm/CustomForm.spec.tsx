import React, { useRef } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CustomForm from '.';
import { initialFormLogin, loginForm, validateFormLogin } from '../../constants/forms/login';

describe('CustomForm tests', () => {
  let onQuantityChange: jest.Mock;
  let quantity: number;

  beforeEach(() => {
    onQuantityChange = jest.fn();
    quantity = 1;
  });

  it('should match snapshot', () => {
    const { container } = render(
      <CustomForm
        initialValues={{}}
        fields={[]}
        validate={{}}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should find username field', () => {
    render(
      <CustomForm
        initialValues={{}}
        fields={loginForm}
        validate={{}}
      />,
    );
    expect(screen.getByTestId(loginForm[0].label)).toBeTruthy();
  });

  it('should find password field', () => {
    render(
      <CustomForm
        initialValues={{}}
        fields={loginForm}
        validate={{}}
      />,
    );
    expect(screen.getByTestId(loginForm[1].label)).toBeTruthy();
  });

  it('should be required password and username', async () => {

    const refForm = {
        current: {
            onsubmit: jest.fn()
        }
    }
    render(
        <div>
            <CustomForm
                fields={loginForm}
                validate={validateFormLogin}
                initialValues={initialFormLogin}
                ref={refForm}
            />
            <button type="submit" data-testid="login-btn" onClick={e => refForm.current?.onsubmit()}>Login</button>
        </div>,
    );
    fireEvent.click(screen.getByTestId('login-btn'))
    expect(screen.getByText('Por favor ingrese el nombre de usuario')).toBeTruthy();
    expect(screen.getByText('Por favor ingrese la contraseña')).toBeTruthy();
  });

  it('should no show error of required when write', async () => {
    const refForm = {
        current: {
            onsubmit: jest.fn()
        }
    }
    render(
        <div>
            <CustomForm
                fields={loginForm}
                validate={validateFormLogin}
                initialValues={initialFormLogin}
                ref={refForm}
            />
            <button type="submit" data-testid="login-btn" onClick={e => refForm.current?.onsubmit()}>Login</button>
        </div>,
    );
    fireEvent.change(screen.getByTestId(loginForm[0].label), {target: {value: 'admin'}})
    fireEvent.change(screen.getByTestId(loginForm[1].label), {target: {value: 'admin'}})

    fireEvent.click(screen.getByTestId('login-btn'))
    expect(screen.queryByText('Por favor ingrese el nombre de usuario')).toBeNull();
    expect(screen.queryByText('Por favor ingrese la contraseña')).toBeNull();
  });
});