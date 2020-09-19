import axios from "axios";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Vue from "vue";
const token = localStorage.getItem("token");
console.log(token);
axios.defaults.headers.common = { Authorization: `bearer ${token}` };

const instance = axios.create({
  baseURL: `https://simple-wms.herokuapp.com/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    NProgress.start()
    console.log({ request: config });
    return config;
  },
  (error) => Promise.reject(error)
);
instance.interceptors.response.use(
  function(response) {
    NProgress.done()
    Vue.$toast.open(response.data.message);
    console.log({ response });
    return response;
  },
  function(error) {
    NProgress.done()
    Vue.$toast.error(error.message);
    Vue.$toast.error(error.response.data.message);
    return Promise.reject(error.response.data.message);
  }
);

export default instance;

