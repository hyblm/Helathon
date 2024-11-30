import Link from "next/link";
import ShipmentsList from "./listShipment/listS";
import { Button } from "@/components/ui/button";

export default function Shipments() {
  return (
    <div className="container m-auto">
      <ShipmentsList />
      <Link href="/shipments/create">
        <Button>Add Shipment</Button>
      </Link>
    </div>
  );
}
