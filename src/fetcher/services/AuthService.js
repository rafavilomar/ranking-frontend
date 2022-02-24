import config from "../../config";
import DataService from "../DataService";

class AuthService {
  static async login(data) {
    const response = await DataService.post(`${config.api.domain}/login`, data);
    return response;
  }

  static async register(data) {
    const response = await DataService.post(
      `${config.api.domain}/register`,
      data
    );
    return response;
  }

  static async refreshToken() {
    const response = await DataService.get(`${config.api.domain}/refreshToken`);
    return response;
  }

  static async getTopTeachers() {
    const response = await DataService.get(`${config.api.domain}/teacher/top`);
    return response;
  }
}
export default AuthService;
