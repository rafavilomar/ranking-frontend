import config from "../../config";
import DataService from "../DataService";

class UserService {
  static async getUserInfo(userId) {
    const response = await DataService.get(
      `${config.api.domain}/user/${userId}`,
    );
    return response;
  }
}
export default UserService;
