import config from "../../config";
import DataService from "../DataService";

class VoteService {

  static async getCommentByTeacher() {
    const response = await DataService.get(
      `${config.api.domain}/vote/byTeacher/1`,
      { headers: { "Content-Type": "application/json" } }
    );
    return response;
  }

  static async makeVote(body) {
    const response = await DataService.post(`${config.api.domain}/vote`, body);
    return response;
  }
}
export default VoteService;
