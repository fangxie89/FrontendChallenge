import EmployeeFormatter from "@/core/formatters/employee.formatter";
import { EmployeeModel } from "@/domain/models/employee.model";
import { ReactNode } from "react";

export interface EmployeeCardProps {
  employee: EmployeeModel;
}

const EmployeeCard = ({ employee }: EmployeeCardProps): ReactNode => {
  return (
    <div className="w-full shadow-lg bg-white rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col flex-1 gap-1">
        <span className="text-gray-600 text-sm">ID: {employee.id}</span>
        <span className="text-lg font-semibold text-gray-800">
          Name: {employee.employee_name}
        </span>
        <span className="text-sm text-green-600">
          Salary: {EmployeeFormatter.formatSalary(employee.employee_salary)}
        </span>
      </div>
    </div>
  );
};
export default EmployeeCard;
