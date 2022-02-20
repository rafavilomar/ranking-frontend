import config from "../../config";
import DataService from "../DataService";

class TeacherService {
  static async getTeacherInfo(teacherId) {
    const response = await DataService.get(
      `${config.api.domain}/teacher/${teacherId}`
    );
    return response;
  }

  static async searchTeacher(teacherName) {
    const response = await DataService.get(
      `${config.api.domain}/teacher/search/${teacherName}`
    );
    return response;
  }

  static async getAllTeachers() {
    const response = await DataService.get(`${config.api.domain}/teacher`);
    return response;
  }
}
export default TeacherService;
