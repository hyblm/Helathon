import { cookies } from "next/headers";

export default async function Home() {
  const user = (await cookies()).get("userId")?.value;
  return (
    <div className="container m-auto">
      <main className="pb-40">You are now logged-in as {user}</main>
    </div>
  );
}
