import config from "../../config";
import DataService from "../DataService";

class TeacherService {

  static async getTeacherInfo() {
    console.log(config);
    console.log(config.api.domain);
    const response = await DataService.get(
      `${config.api.domain}/teacher/1`
    );
    return response;
  }
}
export default TeacherService;
