import EmployeeService from "@/domain/services/employee.service";
import Form from "@/ui/components/EditForm";
import { notFound } from "next/navigation";

export default async function EditEmployeePage({ params }: {params: {employeeId: string}}) {

  // fetch data from server side
  const service = EmployeeService.getInstance();
  const employee = await service.getEmployeeById(Number(params.employeeId))

  // return not-found if employee not found
  if (!employee) {
    return notFound();
  }
  
  return (
    <main className="flex h-screen flex-col items-start justify-start p-4">
      <Form employee={employee} />
    </main>
  );
}
