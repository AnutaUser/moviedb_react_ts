import axios, {AxiosResponse} from "axios";

import {API_KEY, baseURL} from "../api";

export type IRes<T> = Promise<AxiosResponse<T>>;

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    if (config) {
        config.params.api_key = API_KEY;
    }else return Promise;
    return config;
});

export {
    axiosService
};
