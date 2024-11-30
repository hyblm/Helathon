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
    // redirect("/login");
  } else {
    const roles = await getAllExistingUserRoles();
    const groups = await getUserGroupsByUserId(user);
    const permissions = groups.map(({ groupId }) => {
      const perm = roles.find((role) => role.id == groupId);
      return perm;
    });
    console.log(permissions);
    // const showSuppliers: boolean = groups.id === 8888;
    // const showShippments: boolean = groups.id === 6666 || showSuppliers;
    // const showUsers: boolean = groups.id === 6666 || showShippments;
  }

  return (
    <ul className="divide-muted-foreground items-center flex gap-3">
      <li className="">
        <Link
          href="/suppliers"
          className="bg-muted text-muted-foreground rounded p-3"
        >
          Manage Suppliers
        </Link>
      </li>
      <li className="">
        <Link
          href="/shipments"
          className="bg-muted text-muted-foreground rounded p-3"
        >
          Manage Shipments
        </Link>
      </li>
      <li className="">
        <Link
          href="/users"
          className="bg-muted text-muted-foreground rounded p-3"
        >
          Manage Users
        </Link>
      </li>
    </ul>
  );
}
