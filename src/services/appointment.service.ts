import { apiExec } from './genericService';

export interface AppointmentProps {
  owner_name: string;
  owner_document: string;
  pet_name: string;
  pet_age: string;
  date: string;
  time: string;
  pet_type: string;
  price: number;
}

export const createRequest = async (
  data: AppointmentProps,
): Promise<boolean> => {
  const apiValue = await apiExec({
    endpoint: 'requests',
    method: 'POST',
    body: data,
  });
  return apiValue.valid;
};
