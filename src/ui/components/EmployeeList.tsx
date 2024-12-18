"use client";

import { useGetEmployeeList } from "@/domain/hooks/useGetEmployeeList.hook";
import { CreateEmployeeButton } from "./buttons";
import EmployeeListTable from "./EmployeeListTable";

export default function EmployeeList() {
  const { data, isLoading, isError } = useGetEmployeeList();

  return (
    <div className="w-full max-w-5xl mx-auto p-6 flex flex-col gap-6 bg-gray-50 shadow rounded-lg">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Employee List{" "}
          {data && <span className="text-gray-600">({data.length})</span>}
        </h1>
      </div>

      <div className="flex justify-end">
        <CreateEmployeeButton />
      </div>
      {data && (
        <div className="flex flex-col gap-4">
          <EmployeeListTable employees={data} />
        </div>
      )}

      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}

      {!data && !isLoading && isError && (
        <div className="flex w-full items-center justify-center">
          <span className="text-red-500">Error loading employee data</span>
        </div>
      )}
    </div>
  );
}
