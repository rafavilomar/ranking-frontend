import config from "../../config";
import DataService from "../DataService";

class SchoolService {
  static async getAllSchools() {
    const response = await DataService.get(`${config.api.domain}/school`);
    return response;
  }

  static async createInterest(body) {
    const response = await DataService.post(
      `${config.api.domain}/interest`,
      body
    );
    return response;
  }
}
export default SchoolService;
