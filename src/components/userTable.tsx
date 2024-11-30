"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUser, getAllUsers, updateUser, updateUserData } from "@/api";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";

export function UserTable() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  console.log(users);
  return (
    <ScrollArea className="h-96 rounded-md border">
      <Table className="">
        <TableCaption>
          List of all {users ? users.length : 0} users
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>name</TableHead>
            <TableHead>loginName</TableHead>
            <TableHead className="text-right">password</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user: UserTableRowProps) => (
            <TableRow key={user.id} className="justify-end">
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.loginName}</TableCell>
              <TableCell className="text-right">{user.password}</TableCell>
              <TableCell className="">
                <div className=" flex gap-5 ">
                  <Button
                    className="ml-auto"
                    onClick={async () => {
                      await updateUserData(user.id);
                    }}
                  >
                    <Pencil />
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={async () => {
                      await deleteUser(user.id);
                    }}
                  >
                    <Trash />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}

export interface UserTableRowProps {
  id: string;
  name: string;
  loginName: string;
  password: string;
}
