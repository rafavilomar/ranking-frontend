import config from "../../config";
import DataService from "../DataService";

class TeacherService {
  dataService;
  constructor() {
    this.dataService = new DataService();
  }
  

  async getTeacherInfo() {
    console.log(config);
    console.log(config.api.domain);
    const response = await this.dataService.get(
      `${config.api.domain}/teacher/1`
    );
    return response;
  }
}
export default TeacherService;
