import EmployeeList from "@/ui/components/EmployeeList";

export default function Home() {
 
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6 gap-6">
    <div className="w-full max-w-7xl">
      <EmployeeList />
    </div>
  </main>
  );
}
