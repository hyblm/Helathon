import { redirect } from "next/navigation";
import { getAllExistingUserRoles, getUserGroupsByUserId } from "@/api";
import Link from "next/link";

const roleMap = {
  DI_USER: {
    name: "Add Shipments",
    page: "/dashboard",
  },
  ASN_USER: {
    name: "Top Secret",
    page: "/dashboard",
  },
  SUPPLIER_ADMIN: {
    name: "Manage Shipments",
    page: "/dashboard",
  },
  CLIENT_ADMIN: {
    name: "Manage Suppliers",
    page: "/dashboard",
  },
};

export async function DashboardTabs({ user }) {
  if (!user) {
    redirect("/login");
  }
  const roles = await getAllExistingUserRoles();
  const groups = await getUserGroupsByUserId(user);
  const permissions = groups.map(({ groupId }) => {
    const perm = roles.find((role) => role.id == groupId);
    return perm;
  });
  console.log(permissions);
  return (
    <ul className="divide-muted-foreground">
      {permissions.map((permission) => (
        <li key={permission.id} className="p-2">
          <Link
            href={roleMap[permission.name]?.page}
            className="bg-muted text-muted-foreground rounded p-3"
          >
            {roleMap[permission.name]?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
