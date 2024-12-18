import { EmployeeCreateModel, EmployeeListModel, EmployeeModel } from "../models/employee.model";

export default abstract class EmployeeDatasourceContract {
  public abstract getEmployeeList(): Promise<EmployeeListModel | undefined>;
  public abstract createEmployee(
    params: EmployeeCreateModel,
  ): Promise<EmployeeModel | undefined>;
  public abstract getEmployeeById(
    id: number,
  ): Promise<EmployeeModel | undefined>;
  public abstract updateEmployeeById(
    id: number,
    params: EmployeeCreateModel,
  ): Promise<EmployeeModel | undefined>;
  public abstract deleteEmployeeById(
    id: number,
  ): Promise<EmployeeModel | undefined>;
}
