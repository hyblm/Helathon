"use server";

import {getClientSuppliers, getUserDataById, deleteSupplier} from '../../api';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Supplier, UserData} from "@/app/types";
import {Button} from "@/components/ui/button";
import Link from 'next/link'
import { cookies } from "next/headers";

export default async function SupplierList() {
    const user = (await cookies()).get("userId")?.value;

    let suppliers: Supplier[] = [];
    let userData: UserData;

    if (user) {
        userData = await getUserDataById(user);
        suppliers = await getClientSuppliers(userData.clientNumber.toString().substring(2, 4));
        console.log("client " + userData.clientNumber.toString().substring(2, 4))
    }

    console.log("user " + user)

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableHead>All suppliers of client {userData.clientNumber}</TableHead>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Client ID</TableHead>
                        <TableHead>Admin</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                {suppliers.length === 0 ? (
                        <TableCaption>No suppliers for this client.</TableCaption>) : "" }
                <TableBody>
                    {suppliers.map((supplier: Supplier) => (
                        <TableRow key={supplier.id}>
                            <TableCell>
                                {supplier.name}
                            </TableCell>
                            <TableCell>
                                {supplier.clientId}
                            </TableCell>
                            <TableCell>
                                {supplier.adminUserId}
                            </TableCell>
                            <TableCell>
                                <Button onClick={deleteSupplier(supplier.id.toString())}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div>
                <Link href="/suppliers/add">
                    <Button>Add</Button>
                </Link>
                <Button>Edit</Button>
            </div>
        </div>
    );
}
