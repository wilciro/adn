import React from 'react';
import nock from 'nock';
import { fireEvent, render, screen } from '@testing-library/react';
import { loginUser } from './login.service';
import { getTableData } from './tableService';
import { apiExec, ApiResponseModel } from './genericService';

describe('services tests', () => {
  it('should get data the generic service', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/user')
      .reply(200, [{ username: 'admin', password: 'admin' }], {
        'Access-Control-Allow-Origin': '*',
      });
    const valid: ApiResponseModel = await apiExec({
      endpoint: 'user',
      body: {},
      method: 'GET',
    });
    expect(valid?.valid).toBeTruthy();
  });

  it('should fail when get data the generic service', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/users')
      .reply(404, {}, { 'Access-Control-Allow-Origin': '*' });
    const valid: ApiResponseModel = await apiExec({
      endpoint: 'users',
      body: {},
      method: 'GET',
    });
    expect(valid?.valid).toBeFalsy();
  });

  it('should login', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/user?username=admin&password=admin')
      .reply(200, [{ username: 'admin', password: 'admin' }], {
        'Access-Control-Allow-Origin': '*',
      });
    const valid = await loginUser({
      username: 'admin',
      password: 'admin',
    });
    expect(valid).toBeTruthy();
  });

  it('should fail login', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/user?username=wrong&password=admin')
      .reply(200, [], { 'Access-Control-Allow-Origin': '*' });
    const valid = await loginUser({
      username: 'wrong',
      password: 'admin',
    });
    expect(valid).toBeFalsy();
  });

  it('should fail login2', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/user?username=admin&password=wrong')
      .reply(200, [], { 'Access-Control-Allow-Origin': '*' });
    const valid = await loginUser({
      username: 'admin',
      password: 'wrong',
    });
    expect(valid).toBeFalsy();
  });

  it('should get table data', async () => {
    nock(`${process.env.REACT_APP_HOST}`)
      .get('/requests')
      .reply(200, [{ owner_name: 'Juan' }], {
        'Access-Control-Allow-Origin': '*',
      });
    const valid: ApiResponseModel = await getTableData('requests');
    expect(valid?.valid).toBeTruthy();
  });
});
