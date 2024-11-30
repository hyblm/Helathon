"use client";

import { getClientSuppliers, getUserDataById, deleteSupplier } from "../../api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Supplier, UserData } from "@/app/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function SupplierList({ user, userData, suppliers }) {
  return (
    <div>
      <Table>
        <TableCaption>
          All suppliers of client {userData.clientNumber}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Client ID</TableHead>
            <TableHead>Admin</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        {suppliers.length === 0 ? (
          <TableCaption>No suppliers for this client.</TableCaption>
        ) : (
          ""
        )}
        <TableBody>
          {suppliers.map((supplier: Supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.clientId}</TableCell>
              <TableCell>{supplier.adminUserId}</TableCell>
              <TableCell>
                <Button
                  onClick={async () => {
                    let status = await deleteSupplier(supplier.id);
                    toast(
                      `supplier ${supplier.name} deleted with status: ${status}`,
                    );
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="grid grid-cols-2 pt-5 gap-2">
        <Link className="w-full" href="/suppliers/add">
          <Button className="w-full">Add</Button>
        </Link>
        <Button>Edit</Button>
      </div>
    </div>
  );
}
