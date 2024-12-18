import { EmployeeModel } from "@/domain/models/employee.model";
import EmployeeService from "@/domain/services/employee.service";
import EmployeeCard from "@/ui/components/EmployeeCard";
import Link from "next/link";
import { notFound } from "next/navigation";

type EmployeeDetailsPageProps = {
  params: {
    employeeId: string;
  };
}
export default async function EmployeeDetailsPage({params}: EmployeeDetailsPageProps) {

  // fetch employee from server side
  const service = EmployeeService.getInstance();
  const employee = await service.getEmployeeById(Number(params.employeeId))

  // if employee not found, return not found page
  if (!employee) {
    return notFound();
  }

  return (
    <main className="flex h-screen flex-col items-center justify-start p-6 gap-6">
       <h1 className="text-3xl font-bold text-gray-800">Employee Details</h1>
      <EmployeeCard employee={employee} />
      <Link
        className="border px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 transition"
        href={`/employee/${employee.id}/edit`}
      >
        Edit
      </Link>
    </main>
  );
}
