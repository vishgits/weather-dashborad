

import axios from 'axios';
import { axiosRequestType } from '../interface';

export function makeAxiosRequest(request: axiosRequestType) {
    const { getRespose, finished, getError } = request;
    axios.get('https://run.mocky.io/v3/47828692-9364-4256-bf12-ec7fbdd13e75')
        .then(response => {
            getRespose(response.data);
        })
        .catch(error => {
            getError(error);
        }).finally(() => {
            finished();
        });
}

