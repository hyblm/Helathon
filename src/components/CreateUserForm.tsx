import Form from "next/form";
import { createUser, getAllUsers } from "@/api";
import { Suspense } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function CreateUserForm() {
  return (
    <>
      <Suspense>
        <UserList />
      </Suspense>

      <Form action={createUser}>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" />
        <Label htmlFor="login">Username</Label>
        <Input id="login" name="loginName" />
        <Label htmlFor="number">Client Number</Label>
        <Input id="number" name="clientNumber" type="number" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" />
        <Button type="submit">Create User</Button>
      </Form>
    </>
  );
}

async function UserList() {
  const users = await getAllUsers();
  console.log(users);

  return (
    <ul>
      {users.map((user: any) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}
