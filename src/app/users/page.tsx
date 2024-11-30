import { CreateUserForm } from "@/components/CreateUserForm";
import { UserTable } from "@/components/userTable";
import { Suspense } from "react";

export default function UserManagement() {
  return (
    <div className="container m-auto">
      <CreateUserForm />
      <Suspense fallback={<SkeletonTable />}>
        <UserTable />
      </Suspense>
    </div>
  );
}
function SkeletonTable() {
  return (
    <div>
      <div>uwu</div>
    </div>
  );
}
