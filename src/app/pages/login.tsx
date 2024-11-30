"use client";

import React, { useState, ReactNode, FormEvent, useActionState } from "react";
import { login } from "@/api";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Form from "next/form";

export function LoginForm() {
  const [state, action, isPending] = useActionState(login, undefined);
  return (
    <div className="m-auto max-w-md p-6 rounded-lg shadow-md border">
      <h2 className="text-center text-lg font-bold text-gray mb-4">
        Přihlášení
      </h2>
      <Form action={action}>
        <div className="mb-4">
          <Label
            htmlFor="loginName"
            className="block text-sm font-medium text-gray
           mb-1"
          >
            Uživatelské jméno:
          </Label>
          <Input type="text" id="loginName" name="loginName" />
        </div>
        <div className="mb-10">
          <Label
            htmlFor="password"
            className="block text-sm font-medium text-gray mb-1"
          >
            Heslo:
          </Label>
          <Input type="password" id="password" name="password" />
        </div>
        {state?.statusText && (
          <p className=" p-2 mb-4 rounded text-destructive-foreground bg-destructive">
            Špatné uživatelské jméno nebo heslo
          </p>
        )}
        <SubmitButton isPending={isPending} />
      </Form>
    </div>
  );
}

interface SubmitProps {
  isPending: boolean;
}
function SubmitButton({ isPending }: SubmitProps) {
  return (
    <Button
      disabled={isPending}
      type="submit"
      className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Sign In
    </Button>
  );
}
