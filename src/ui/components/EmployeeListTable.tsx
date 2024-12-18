import Link from "next/link";
import EmployeeCard from "./EmployeeCard";
import { DeleteEmployeeButton, UpdateEmployeeButton } from "./buttons";
import { EmployeeModel } from "@/domain/models/employee.model";

type EmployeeListTableProps = {
  employees: EmployeeModel[];
};

export default function EmployeeListTable({
  employees,
}: EmployeeListTableProps) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {employees?.map((employee, index) => (
            <div
              key={index}
              className="mb-2 w-full flex items-center justify-between bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/employee/${employee.id}`} className="flex-1">
                <EmployeeCard employee={employee} />
              </Link>
              <div className="flex gap-2 ml-4">
                <UpdateEmployeeButton id={employee.id} />
                <DeleteEmployeeButton id={employee.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
