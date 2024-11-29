import { CreateUserForm } from "@/components/CreateUserForm";
import { Suspense } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "@/api";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function UserManagement() {
  return (
    <div className="container">
      <CreateUserForm />
      <Suspense>
        <UserTable />
      </Suspense>
    </div>
  );
}

async function UserTable() {
  const users = await getAllUsers();
  console.log(users);
  return (
    <Table>
      <TableCaption>List of all users</TableCaption>
      <ScrollArea className="h-72 w-max rounded-md border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: any) => (
            <TableRow>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.loginName}</TableCell>
              <TableCell className="text-right">{user.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ScrollArea>
    </Table>
  );
}
