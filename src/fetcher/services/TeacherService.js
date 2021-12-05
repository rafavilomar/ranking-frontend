import DataService from "../DataService";

class TeacherService {
  dataService;
  constructor() {
    this.dataService = new DataService();
  }

  async getTeacherInfo() {
    const response = await this.dataService.get(
      `http://localhost:3500/teacher/1`,
      {headers: {'Content-Type': 'application/json'}}
    );
    return response;
  }
}
export default TeacherService;
