import { apiExec } from './genericService';

export const getTableData = async (endpoint: string) => {
    return apiExec({
        endpoint,
        body: {}
    });
};
