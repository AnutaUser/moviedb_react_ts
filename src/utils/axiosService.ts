import axios, {AxiosResponse} from "axios";

import {ACCESS_TOKEN_KEY, baseURL} from "../api";

export type IRes<T> = Promise<AxiosResponse<T>>;

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    if (ACCESS_TOKEN_KEY && config.headers) {
        config.headers.Authorization = `Bearer ${ACCESS_TOKEN_KEY}`;
    } else
        return Promise;
    return config;
});

export {
    axiosService
};
