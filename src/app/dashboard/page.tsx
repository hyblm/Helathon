import { getAllExistingUserRoles, getUserGroupsByUserId } from "@/api";
import { cookies } from "next/headers";

export default async function Home() {
  const user = (await cookies()).get("userId")?.value;
  const roles = await getAllExistingUserRoles();
  let groups = [];
  if (user) {
    groups = await getUserGroupsByUserId(user);
  }
  const permissions = groups.map(({ groupId }) => {
    const perm = roles.find((roleMap) => roleMap.id == groupId);
    return perm;
  });
  console.log(permissions);

  return (
    <div className="container m-auto">
      <main className="pb-40">
        <p>
          You are logged-in as user
          <span className="text-muted-foreground">(id: {user})</span> with these
          roles:
        </p>
        <ul className="divide-muted-foreground">
          {permissions.map((permission) => (
            <li key={permission.id} className="py-2">
              <span className="bg-muted text-muted-foreground rounded p-1">
                {permission.name}
              </span>{" "}
              - {permission.description}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
