import { LoginForm } from "./pages/login";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getAllExistingUserRoles, getUserGroupsByUserId } from "@/api";

export default async function Dashboard() {
  const user = (await cookies()).get("userId")?.value;
  // if (!user) {
  //   redirect("/login");
  // }

  // const roles = await getAllExistingUserRoles();
  // const groups = await getUserGroupsByUserId(user);
  // const permissions = groups.map(({ groupId }) => {
  //   const perm = roles.find((role) => role.id == groupId);
  //   return perm;
  // });
  // console.log(permissions);

  return (
    <div className="container m-auto">
      <main className="pb-40"></main>
    </div>
  );
}

// <p>
//   You are logged-in as user
//   <span className="text-muted-foreground">(id: {user})</span> with these
//   roles:
// </p>
// <ul className="divide-muted-foreground">
//   {permissions.map((permission) => (
//     <li key={permission.id} className="py-2">
//       <span className="bg-muted text-muted-foreground rounded p-1">
//         {permission.name}
//       </span>{" "}
//       - {permission.description}
//     </li>
//   ))}
// </ul>
