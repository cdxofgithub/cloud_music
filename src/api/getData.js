/* eslint-disable */
import axios from 'axios';
import {
  baseUrl
} from "../config/index";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseUrl;

// 请求的拦截器
axios.interceptors.request.use(config => {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
  if (res.data.code == 200) {
    return Promise.resolve(res);
  } else {
    console.log(res)
  }
}, function (error) {
  return Promise.reject(error);
});

// 获取 bannerList
export const getBannerList = () => {
  return axios.get("banner").then(res => res.data);
};

//获取推荐歌单
export const getPersonalized = () => {
  return axios.get("personalized").then(res => res.data);
};

//获取歌单详情
export const getPlayList = (params) => {
  return axios.get("playlist/detail", params).then(res => res.data);
};