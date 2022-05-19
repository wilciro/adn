import { apiExec } from './genericService';

interface LoginProps {
    username: string,
    password: string
};

export const loginUser = async (data: LoginProps) : Promise<boolean> => {
    const apiValue = await apiExec({
        endpoint: 'user',
        body: data
    });
    return apiValue.valid && apiValue.data.length > 0;
};
