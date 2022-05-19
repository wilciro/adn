import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { loginUser } from './login.service';
import { getTableData } from './tableService';
import { apiExec, ApiResponseModel } from './genericService';

describe('services tests', () => {
  it('should get data the generic service', async () => {
    const valid: ApiResponseModel = await apiExec({
      endpoint: 'user',
      body: {},
      method: 'GET',
    });
    expect(valid?.valid).toBeTruthy();
  });

  it('should fail when get data the generic service', async () => {
    const valid: ApiResponseModel = await apiExec({
      endpoint: 'users',
      body: {},
      method: 'GET',
    });
    expect(valid?.valid).toBeFalsy();
  });

  it('should login', async () => {
    const valid = await loginUser({
      username: 'admin',
      password: 'admin',
    });
    expect(valid).toBeTruthy();
  });

  it('should fail login', async () => {
    const valid = await loginUser({
      username: 'wrong',
      password: 'admin',
    });
    expect(valid).toBeFalsy();
  });

  it('should fail login2', async () => {
    const valid = await loginUser({
      username: 'admin',
      password: 'wrong',
    });
    expect(valid).toBeFalsy();
  });

  it('should get table data', async () => {
    const valid: ApiResponseModel = await getTableData('requests');
    expect(valid?.valid).toBeTruthy();
  });
});
