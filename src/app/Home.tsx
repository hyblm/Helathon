import { LoginForm } from "./pages/login";

export default async function Home() {
  const user = (await cookies()).get("userId")?.value;
  return (
    <div>
      <main className="pb-40">
        <LoginForm />
      </main>
    </div>
  );
}
