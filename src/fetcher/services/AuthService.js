import config from "../../config";
import DataService from "../DataService";

class AuthService {

    static async login(data) {
        const response = await DataService.post(
            `${config.api.domain}/login`, data
        );
        return response;
    }

    static async register(data) {
        const response = await DataService.post(
            `${config.api.domain}/register`, data
        );
        return response;
    }
}
export default AuthService;
