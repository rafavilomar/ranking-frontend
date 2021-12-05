import axios from "axios";

class DataService {

  async get(url, headers) {
    const result = await axios.get(url);
    console.log(result);
    return result.data;
  }
}

export default DataService;
