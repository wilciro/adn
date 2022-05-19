import { apiExec, ApiResponseModel } from './genericService';

export const getTableData = async (
  endpoint: string,
): Promise<ApiResponseModel> => {
  return apiExec({
    endpoint,
    body: {},
  });
};
