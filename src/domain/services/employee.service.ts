import EmployeeDatasource from "@/data/datasources/employee.datasource";
import EmployeeDatasourceContract from "../contracts/employeeDatasource.contract";
import { EmployeeCreateModel, EmployeeListModel, EmployeeModel } from "../models/employee.model";

export default class EmployeeService {
  private static _instance: EmployeeService;
  public static getInstance(): EmployeeService {
    if (!EmployeeService._instance) {
      EmployeeService._instance = new EmployeeService();
    }
    return EmployeeService._instance;
  }

  private constructor(
    private datasource: EmployeeDatasourceContract = new EmployeeDatasource(),
  ) {}

  public getEmployeeList(): Promise<EmployeeListModel | undefined> {
    return this.datasource.getEmployeeList();
  }
  public createEmployee(params: EmployeeCreateModel): Promise<EmployeeModel | undefined> {
    return this.datasource.createEmployee(params);
  }
  public getEmployeeById(
    id: number,
  ): Promise<EmployeeModel | undefined> {
    return this.datasource.getEmployeeById(id);
  }
  public updateEmployeeById(
    id: number,
    params: EmployeeCreateModel,
  ): Promise<EmployeeModel | undefined> {
    return this.datasource.updateEmployeeById(id, params);
  }
  public deleteEmployeeById(
    id: number,
  ): Promise<EmployeeModel | undefined> {
    return this.datasource.deleteEmployeeById(id);
  }
}
