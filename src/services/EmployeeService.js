// Employee Services - List of calls to api

// @author Liya Mathew
// @since 10.10.2021

import http from "../http-common";

class EmployeeService {
  getAllEmployees() {
    return http.get("/employees/employees");
  }

  getEmployeeById(id) {
    return http.get(`/employees/employees/${id}`);
  }

  createEmployee(data) {
    return http.post("/employees/employees", data);
  }

  updateEmployee(data) {
    return http.put(`/employees/employees`, data);
  }

  deleteEmployee(id) {
    return http.delete(`/employees/employees/${id}`);
  }
}

export default new EmployeeService();