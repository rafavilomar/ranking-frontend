import axios from "axios";

class DataService {
  static async get(url, headers) {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const result = await axios.get(url, { headers: { Authorization: token, ...headers } });
    return result.data;
  }

  static async post(url, data, headers) {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const result = await axios.post(url, data, { headers: { Authorization: token, ...headers } });
    return result.data;
  }
}

export default DataService;
