import {
  getAllExistingUserRoles,
  getSuppliersWithAdminUserId,
  getUserGroupsByUserId,
} from "@/api";
import { cookies } from "next/headers";

export default async function Home() {
  const cookie = (await cookies()).get("user")?.value;
  let user;
  if (cookie) {
    user = JSON.parse(cookie);
  }
  const roles = await getAllExistingUserRoles();
  let groups = [];
  if (user) {
    groups = await getUserGroupsByUserId(user.id);
  }
  const permissions = groups.map(({ groupId }) => {
    const perm = roles.find((role) => role.id == groupId);
    return perm;
  });
  // console.log(permissions);
  console.log(user);

  return (
    <div className="container m-auto">
      <main className="pb-40">
        <p>
          You are logged-in as user
          <span className="text-muted-foreground">(id: {user.id})</span> with
          these roles:
        </p>
        <ul className="divide-muted-foreground">
          {permissions.map((perm) => (
            <li key={perm.id} className="py-2">
              <span className="bg-muted text-muted-foreground rounded p-1">
                {perm.name}
              </span>{" "}
              - {perm.description}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
