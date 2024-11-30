"use server";

import {getClientSuppliers} from '../../api';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Supplier} from "@/app/types";
import {Button} from "@/components/ui/button";
import Link from 'next/link'

export default async function SupplierList() {
     //TODO passovat id ze session
    const suppliers: Supplier[] = await getClientSuppliers(61);

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableHead>All suppliers of client</TableHead>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Client ID</TableHead>
                        <TableHead>Admin</TableHead>
                        <TableHead>Actions</TableHead>
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
                                <Button>Delete</Button>
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
