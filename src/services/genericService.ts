import axios from "axios";

export interface ApiModel {
    endpoint: string,
    method?: string,
    body?: object
}

export const apiExec = async ({
    endpoint,
    method = "GET",
    body = {}
}: ApiModel) => {
    try {
        const response = await axios.get(`http://localhost:3001/${endpoint}`, {params: body});
        if (response.status >= 200 && response.status < 300) {
            return {data: response.data, valid: true}
        }
        return {data: null, valid: false}
    } catch (error) {
        return {data: null, valid: false}
    }
}