import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateUserForm } from "@/components/CreateUserForm";
import { UserTable } from "@/components/userTable";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default async function UserManagement() {
  const user = (await cookies()).get("userId")?.value;
  return (
    <div className="container m-auto">
      <CreateUserForm />
      <Suspense fallback={<SkeletonTable />}>
        <UserTable admin={user} />
      </Suspense>
    </div>
  );
}
function SkeletonTable() {
  return (
    <Table className="rounded-md border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">id</TableHead>
          <TableHead>name</TableHead>
          <TableHead>loginName</TableHead>
          <TableHead className="text-right">password</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4, 5].map((id) => (
          <TableRow key={id} className="justify-end">
            <TableCell>
              <Skeleton className="min-h-8" />
            </TableCell>
            <TableCell>
              <Skeleton className="min-h-8" />
            </TableCell>
            <TableCell>
              <Skeleton className="min-h-8" />
            </TableCell>
            <TableCell>
              <Skeleton className="min-h-8" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
