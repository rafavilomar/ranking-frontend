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

  static async checkVote(idTeacher, idUser) {
    const response = await DataService.get(`${config.api.domain}/vote/checkVote?idTeacher=${idTeacher}&idUser=${idUser}`);
    return response;
  }

}
export default VoteService;
