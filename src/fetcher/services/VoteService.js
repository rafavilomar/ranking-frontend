import DataService from "../DataService";

class VoteService {
  dataService;
  constructor() {
    this.dataService = new DataService();
  }

  async getCommentByTeacher() {
    const response = await this.dataService.get(
      `http://localhost:3500/vote/byTeacher/1`,
      { headers: { "Content-Type": "application/json" } }
    );
    return response;
  }

  async makeVote() {
    const response = await this.dataService.post(`http://localhost:3500/vote`);
    return response;
  }
}
export default VoteService;
