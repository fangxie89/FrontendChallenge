import Link from "next/link";
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteEmployee } from "@/domain/services/actions";
import { useQueryClient } from "@tanstack/react-query";

export function CreateEmployeeButton() {
  return (
    <Link
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      href={`/employee/create`}
    >
      Create
    </Link>
  );
}

export function UpdateEmployeeButton({ id }: { id: number }) {
  return (
    <Link
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      href={`/employee/${id}/edit`}
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteEmployeeButton({ id }: { id: number }) {
  const queryClient = useQueryClient();
  
  const deleteEmployeeFunc = async () => {
    await deleteEmployee(id);

    // make react query renew employee list data after delete
    queryClient.invalidateQueries({ queryKey: ['getEmployeeList']});
  }
  return (
    <form action={deleteEmployeeFunc}>
      <button className="rounded-md border p-2 hover:bg-gray-200">
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
