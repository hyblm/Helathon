import { cookies } from "next/headers";
import { getClientSuppliers, getUserDataById, deleteSupplier } from "../../api";
import SupplierList from "../pages/supplierList";
import { Supplier, UserData } from "../types";

export default async function Home() {
  const user = (await cookies()).get("userId")?.value;

  let suppliers: Supplier[] = [];
  let userData: UserData;

  if (user) {
    userData = await getUserDataById(user);
    suppliers = await getClientSuppliers(
      userData.clientNumber.toString().substring(2, 4),
    );
    console.log("client " + userData.clientNumber.toString().substring(2, 4));
  }

  console.log("user " + user);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SupplierList user={user} userData={userData} suppliers={suppliers} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
