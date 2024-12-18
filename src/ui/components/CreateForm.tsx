"use client";

import { createEmployee, State } from "@/domain/services/actions";
import { useState } from "react";

export default function CreateEmployeeForm() {
  // use server action to create employee and set error state if any
  const [errorsState, setErrorsState] = useState<State | null>(null);
  const createEmployeeFunc = async (formdata: FormData) => {
    const response = await createEmployee(formdata);
    if (response.errors) {
      setErrorsState(response);
    }
  };
  
  return (
    <form
      action={createEmployeeFunc}
      className="space-y-6 p-6 bg-white rounded-lg shadow-md w-full max-w-lg mx-auto"
    >
      <div className="mb-4">
        <label
          htmlFor="employeeName"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="employee_name"
              name="employee_name"
              type="text"
              placeholder="Enter name"
              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
              aria-describedby="name-error"
            />
          </div>
        </div>
      </div>
      <div id="name-error" aria-live="polite" aria-atomic="true">
        {errorsState &&
          errorsState.errors?.employee_name &&
          errorsState.errors.employee_name.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="mb-4">
        <label
          htmlFor="employee_salary"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Salary
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="employee_salary"
              name="employee_salary"
              type="number"
              placeholder="Enter salary"
              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
              aria-describedby="salary-error"
            />
          </div>
        </div>
      </div>
      <div id="salary-error" aria-live="polite" aria-atomic="true">
        {errorsState &&
          errorsState.errors?.employee_salary &&
          errorsState.errors.employee_salary.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="mb-4">
        <label
          htmlFor="employee_age"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="employee_age"
              name="employee_age"
              type="number"
              placeholder="Enter age"
              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
              aria-describedby="age-error"
            />
          </div>
        </div>
      </div>
      <div id="age-error" aria-live="polite" aria-atomic="true">
        {errorsState &&
          errorsState.errors?.employee_age &&
          errorsState.errors.employee_age.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition"
      >
        Create Employee
      </button>
    </form>
  );
}
