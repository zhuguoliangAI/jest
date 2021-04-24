import axios from 'axios';

export const runCallBack = (fn) => {
    fn();
}

export const getData = () => {
    return axios.get('/').then(res => res.data);
}