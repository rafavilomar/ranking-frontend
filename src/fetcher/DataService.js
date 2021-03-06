import axios from "axios";
import middelware from "./Middelware";

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    middelware(err.response);
    return Promise.reject(err);
  }
);

class DataService {
  static async get(url, headers) {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const result = await axios.get(url, {
      timeout: 5000,
      headers: { Authorization: token, ...headers },
    });
    return result.data;
  }

  static async post(url, data, headers) {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const result = await axios.post(url, data, {
      timeout: 5000,
      headers: { Authorization: token, ...headers },
    });
    return result.data;
  }
}

export default DataService;
