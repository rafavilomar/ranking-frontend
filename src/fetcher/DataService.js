import axios from "axios";

class DataService {
  async get(url, headers) {
    const result = await axios.get(url);
    return result.data;
  }

  async post(url, data, headers) {
    const result = await axios.post(url, data);
    return result.data;
  }
}

export default DataService;
