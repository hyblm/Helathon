import Form from "next/form";
import { createUser } from "@/api";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function CreateUserForm() {
  return (
    <>
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
