"use client";
import Form from "next/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUser, getAllUsers, updateUser } from "@/api";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export function UserTable({ admin }) {
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
                  <Drawer>
                    <DrawerTrigger className="ml-auto">
                      <Pencil />
                    </DrawerTrigger>
                    <DrawerContent>
                      <Form
                        action={async (formData: FormData) => {
                          const body = {
                            id: user.id,
                            name: formData.get("name") || user.name,
                            loginName:
                              formData.get("loginName") || user.loginName,
                            description:
                              formData.get("description") || user.description,
                            updatedBy: admin.id,
                            updatedAt: new Date(),
                            createdBy: "string",
                            status: 0,
                            passwordChanged: 0,
                            passwordChangeable: 0,
                            passwordValidTo: "2024-11-30",
                            passwordResetToken: "string",
                            passwordResetTokenExpiredAt: "2024-11-30",
                            passwordSalt: "string",
                          };
                          let status = await updateUser(JSON.stringify(body));
                          toast(`Updated ${user.name}`);
                        }}
                        className="max-w-96 container m-auto grid gap-4 py-14"
                      >
                        <DrawerHeader className="">
                          <DrawerTitle>update {user.name}</DrawerTitle>
                          <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" />
                          </div>
                          <div>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" />
                          </div>
                          <div>
                            <Label htmlFor="login">Username</Label>
                            <Input id="login" name="loginName" />
                          </div>
                          <DrawerDescription></DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                          <Button type="submit">Submit</Button>
                          <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </Form>
                    </DrawerContent>
                  </Drawer>
                  <Button
                    variant="destructive"
                    onClick={async () => {
                      let status = await deleteUser(user.id);
                      toast(`user ${user.name} deleted with status: ${status}`);
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
