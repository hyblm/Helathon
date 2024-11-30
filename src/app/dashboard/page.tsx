import {
  getAllExistingUserRoles,
  getSuppliersWithAdminUserId,
  getUserGroupsByUserId,
} from "@/api";
import { cookies } from "next/headers";

export default async function Home() {
  const user = (await cookies()).get("userId")?.value;
  const roles = await getAllExistingUserRoles();
  let groups = [];
  let suppliers = [];
  if (user) {
    groups = await getUserGroupsByUserId(user);
    // suppliers = await getSuppliersWithAdminUserId(user);
  }
  const permissions = groups.map(({ groupId }) => {
    const perm = roles.find((role) => role.id == groupId);
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
          {permissions.map((perm) => (
            <li key={perm.id} className="py-2">
              <span className="bg-muted text-muted-foreground rounded p-1">
                {perm.name}
              </span>{" "}
              - {perm.description}
            </li>
          ))}
        </ul>
        <ul className="divide-muted-foreground">
          {suppliers.map((supplier) => (
            <li key={supplier.id} className="py-2">
              <span className="bg-muted text-muted-foreground rounded p-1">
                {supplier.name}
              </span>{" "}
              - {supplier.description}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
