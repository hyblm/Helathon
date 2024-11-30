import Form from "next/form";
import { createUser } from "@/api";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function CreateUserForm() {
  return (
    <>
      <Form action={createUser} className="max-w-96 m-auto grid gap-4 py-14">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" />
        </div>
        <div>
          <Label htmlFor="login">Username</Label>
          <Input id="login" name="loginName" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" />
        </div>
        <Button type="submit">Create User</Button>
      </Form>
    </>
  );
}
