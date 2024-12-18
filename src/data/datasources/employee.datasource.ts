import EmployeeDatasourceContract from "@/domain/contracts/employeeDatasource.contract";
import {
  EmployeeCreateModel,
  EmployeeListModel,
  EmployeeListSchema,
  EmployeeSchema,
  EmployeeModel,
} from "@/domain/models/employee.model";

const BASE_URL = "http://localhost:3001";

type ResponseType = {
  message: string;
  data: EmployeeListModel | EmployeeModel;
  status: 'success' | 'error';
};

export default class EmployeeDatasource extends EmployeeDatasourceContract {
  // fetch reuquest
  private async fetchData<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T | undefined> {
    try {
      const response = await fetch(url, options);

      // return undefined if response is not ok
      if (!response.ok) {
        console.error(`Failed to fetch ${url}: ${response.statusText}`);
        return undefined;
      }
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (err) {
      console.error(`Error fetching ${url}:`, err);
      return undefined;
    }
  }
  public async getEmployeeList(): Promise<EmployeeListModel | undefined> {
    const url = `${BASE_URL}/api/v1/employees`;
    const data = await this.fetchData<ResponseType>(url);

    if (data) {
      return EmployeeListSchema.parse(data.data);
    }

    return undefined;
  }

  public async createEmployee(
    params: EmployeeCreateModel
  ): Promise<EmployeeModel | undefined> {
    const url = `${BASE_URL}/api/v1/create`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };
    const data = await this.fetchData<EmployeeModel>(url, options);
    return data;
  }

  public async getEmployeeById(id: number): Promise<EmployeeModel | undefined> {
    const url = `${BASE_URL}/api/v1/employee/${id}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store" as RequestCache,
    };
    const data = await this.fetchData<EmployeeModel>(url, options);
    console.log(data);
    if (data) {
      return EmployeeSchema.parse(data);
    }

    return undefined;
  }

  public async updateEmployeeById(
    id: number,
    params: EmployeeCreateModel
  ): Promise<EmployeeModel | undefined> {
    const url = `${BASE_URL}/api/v1/update/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };
    const data = await this.fetchData<EmployeeModel>(url, options);
    return data;
  }

  public async deleteEmployeeById(
    id: number
  ): Promise<EmployeeModel | undefined> {
    const url = `${BASE_URL}/api/v1/delete/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    await this.fetchData<EmployeeModel>(url, options);
    return undefined;
  }
}
