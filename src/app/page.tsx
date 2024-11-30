import { LoginForm } from "./pages/login";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getAllExistingUserRoles, getUserGroupsByUserId } from "@/api";
import Home from "./dashboard/page";

export default async function Dashboard() {
  const user = (await cookies()).get("userId")?.value;

  return (
    <div className="container m-auto">
      <main className="pb-40">
        <Home />
      </main>
    </div>
  );
}
