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
  }
  const roles = await getAllExistingUserRoles();
  const groups = await getUserGroupsByUserId(user);
  const permissions = groups.map(({ groupId }) => {
    const perm = roles.find((role) => role.id == groupId);
    return perm;
  });
  console.log(permissions);
  const id = groups[0].groupId;
  const showSupliers: boolean = id === 8888;
  const showShipments: boolean = id === 6666 || showSupliers;
  const showUsers: boolean = id === 3333 || showShipments;
  const showDeliveries: boolean = id === 4444 || showShipments;

  console.log(groups, showSupliers, showShipments, showUsers, showDeliveries);

  return (
    <ul className="divide-muted-foreground items-center flex gap-3">
      {showSupliers && (
        <li className="">
          <Link
            href="/suppliers"
            className="bg-muted text-muted-foreground rounded p-3"
          >
            Suppliers
          </Link>
        </li>
      )}
      {showShipments && (
        <li className="">
          <Link
            href="/shipments"
            className="bg-muted text-muted-foreground rounded p-3"
          >
            Shipments
          </Link>
        </li>
      )}
      {showDeliveries && (
        <li className="">
          <Link href="/" className="bg-muted text-muted-foreground rounded p-3">
            🛑 Deliveries
          </Link>
        </li>
      )}
      {showUsers && (
        <li className="">
          <Link
            href="/users"
            className="bg-muted text-muted-foreground rounded p-3"
          >
            Users
          </Link>
        </li>
      )}
    </ul>
  );
}
