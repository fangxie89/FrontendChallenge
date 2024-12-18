"use server";

import { revalidatePath } from "next/cache";
import { EmployeeCreateSchema } from "../models/employee.model";
import EmployeeService from "./employee.service";
import { redirect } from "next/navigation";

// server actions

const service = EmployeeService.getInstance();

export type State = {
  errors?: {
    employee_name?: string[];
    employee_age?: string[];
    employee_salary?: string[];
  };
  message?: string | null;
};

export async function createEmployee(formData: FormData): Promise<State> {
  const validatedFields = EmployeeCreateSchema.safeParse({
    employee_name: formData.get("employee_name"),
    employee_age: Number(formData.get("employee_salary")),
    employee_salary: Number(formData.get("employee_age")),
  });

  // validate fields
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  const params = validatedFields.data;
  try {
    await service.createEmployee(params);
  } catch (error) {
    return {
      message: "Failed to create employee",
    };
  }

  // clean cache and redirect
  revalidatePath("/");
  redirect("/");
}

export async function updateEmployee(
  id: number,
  formData: FormData
): Promise<State> {
  const validatedFields = EmployeeCreateSchema.safeParse({
    employee_name: formData.get("employee_name"),
    employee_age: Number(formData.get("employee_age")),
    employee_salary: Number(formData.get("employee_salary")),
  });
  // validate fields
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  const params = validatedFields.data;
  try {
    await service.updateEmployeeById(id, params);
  } catch (error) {
    return {
      message: "Failed to create employee",
    };
  }

  // clean cache and redirect
  revalidatePath("/");
  redirect("/");
}

export async function deleteEmployee(id: number) {
  try {
    await service.deleteEmployeeById(id);
  } catch (error) {
    return {
      message: "Failed to delete employee",
    };
  }

  // clean cache and redirect
  revalidatePath("/");
  redirect("/");
}
