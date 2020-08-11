import { axiosInstance } from "./axiosBase";

const getAll = (url) => {
    return axiosInstance({
        method: "get",
        url: url
    });
};

const post = (url, body) => {
    return axiosInstance({
        method: "post",
        url: url,
        data: body
    });
};

export default {
    getAll,
    post
}