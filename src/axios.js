import axios from 'axios';
import { message } from "antd/lib/index";
axios.defaultSource = axios.CancelToken.source();

// 创建一个 axios 实例
const service = axios.create({
    baseURL: '/api/admin'
});

const cleanData = (obj) => {
    for(let key in obj) {
        if (obj[key] === '' || obj[key] === undefined || obj[key] === null) {
            delete obj[key]
        }
    }
    return obj;
}

service.interceptors.request.use(
    config => {
        const user = localStorage.getItem('user');
        config.headers['token'] = user ? JSON.parse(user).token : '';
        config.params = cleanData(config.params)
        return config;
    },
    error => {

    }
);

service.interceptors.response.use(
    res => {
        return res.data;
    },
    error => {
        if (error.response.data.errCode === 1) {
            setTimeout(() => {
                window.location.href = '/';
            }, 1000)
        } else if (error.response.data.errCode === 2) {
            message.error('Permission denied!');
        } else {
            message.error('Service Error');
        }
        return Promise.reject(error);
    }
);

export default service;
