import Vue from "vue";
import axios from "axios";
import store from "@/store";

const service = axios.create({
  baseURL: process.env.MIX_BASE_API,
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    const token = store.state.auth.token;
    const user_id = store.state.auth.user && store.state.auth.user.user_id;

    if (token) config.headers["Authorization"] = token;
    if (user_id) config.headers["Userid"] = user_id;

    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response && response.data;
  },
  error => {
    let message = error.message;
    if (error.response && error.response.data && error.response.data.errors) {
      message = error.response.data.errors;
    } else if (
      error.response &&
      error.response.data &&
      error.resonse.data.error
    ) {
      message = error.response.data.error;
    }

    return Promise.reject(error);
  }
);

export default service;
