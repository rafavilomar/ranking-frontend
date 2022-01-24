import config from "../../config";
import DataService from "../DataService";

class AuthService {
    dataService;
    constructor() {
        this.dataService = new DataService();
    }

    async login(data) {
        const response = await this.dataService.post(
            `${config.api.domain}/login`, data
        );
        return response;
    }

    async register(data) {
        const response = await this.dataService.post(
            `${config.api.domain}/register`, data
        );
        return response;
    }
}
export default AuthService;
