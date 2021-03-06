import { showNotification } from '@mantine/notifications';
import axios from 'axios';

const OK_MAX = 300;
const OK_MIN = 200;

export interface ApiResponseModel {
  data: Array<object> | null;
  valid: boolean;
}

export interface ApiModel {
  endpoint: string;
  method?: string;
  body?: object;
}

export const apiExec = async ({
  endpoint,
  method = 'GET',
  body = {},
}: ApiModel): Promise<ApiResponseModel> => {
  try {
    let response;
    if (method === 'POST') {
      response = await axios.post(
        `${process.env.REACT_APP_HOST}/${endpoint}`,
        body,
      );
    } else {
      response = await axios.get(`${process.env.REACT_APP_HOST}/${endpoint}`, {
        params: body,
      });
    }
    if (response.status >= OK_MIN && response.status < OK_MAX) {
      return { data: response.data, valid: true };
    }
    showNotification({
      color: 'red',
      title: 'Error en la petición',
      message: 'Ocurrió un error con tu petición',
    });
    return { data: null, valid: false };
  } catch (error) {
    showNotification({
      color: 'red',
      title: 'Error en la petición',
      message: 'Ocurrió un error con el servidor',
    });
    return { data: null, valid: false };
  }
};
