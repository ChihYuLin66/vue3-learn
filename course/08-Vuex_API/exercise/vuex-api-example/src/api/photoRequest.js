import axios from "axios";

const photoRequest = axios.create({
    'baseURL': 'https://vue-lessons-api.vercel.app'
});

// axios 攔截， 可以拿來作為驗證資料

// 送出前
photoRequest.interceptors.request.use(
    (config) => {
        console.log(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// 回來後，取得資料前
photoRequest.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)


export const getPhoteRequest = () =>  photoRequest.get('/photo/list');