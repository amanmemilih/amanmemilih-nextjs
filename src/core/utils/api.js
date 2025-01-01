import axios from "axios";
import config from "@/core/config";

axios.defaults.baseURL = config.API_URL;
axios.defaults.withCredentials = false;
axios.defaults.withXSRFToken = false;

function get(url, options) {
  return axios.get(url, options);
}

function post(url, data = {}, headers = {}) {
  return axios.post(url, data, headers);
}

function put(url, data = {}, options = {}) {
  return axios.post(`${url}?_method=PUT`, data, options);
}

function del(url) {
  return axios.delete(url);
}

const api = {
  get,
  post,
  put,
  del,
};

export default api;
