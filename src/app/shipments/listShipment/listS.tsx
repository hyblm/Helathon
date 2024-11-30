"use client";

import { useState, useEffect } from "react";
import { Shipment, PackingPosition } from "@/app/types";
import { fetchShipments, deleteShipment } from "@/api";

export default function ShipmentsList() {
    const [shipments, setShipments] = useState<{ pending: Shipment[]; sent: Shipment[] }>({ pending: [], sent: [] });

    useEffect(() => {
        async function loadShipments() {
            const data = await fetchShipments();
            setShipments(data);
        }
        loadShipments();
    }, []);

    const handleDelete = async (id: string, status: string) => {
        if (status === "sent") {
            alert("Only administrators can delete sent shipments.");
            return;
        }
        await deleteShipment(id);
        setShipments((prev) => ({
            ...prev,
            pending: prev.pending.filter((shipment) => shipment.id !== id),
        }));
    };

    const renderPackingPositions = (positions: PackingPosition[]) => {
        return positions.map((position, index) => (
            <div key={index} className="packing-position">
                <h4>{position.lk === "S" ? "Box" : "Pallet"}</h4>
                <p>Quantity Per Unit: {position.qtyPerPackUnit}</p>
                <p>Units: {position.qtyOfPackUnits}</p>
                <p>Packs Per Pallet: {position.packUnitsQty}</p>
            </div>
        ));
    };

    return (
        <div>
            <h1>Pending Shipments</h1>
            {shipments.pending.length > 0 ? (
                shipments.pending.map((shipment) => (
                    <div key={shipment.id} className="shipment">
                        <h3>Shipment ID: {shipment.id}</h3>
                        {shipment.packingPositions && renderPackingPositions(shipment.packingPositions)}
                        <button onClick={() => handleDelete(shipment.id, shipment.status)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No pending shipments.</p>
            )}
            <h1>Sent Shipments</h1>
            {shipments.sent.length > 0 ? (
                shipments.sent.map((shipment) => (
                    <div key={shipment.id} className="shipment">
                        <h3>Shipment ID: {shipment.id}</h3>
                        {shipment.packingPositions && renderPackingPositions(shipment.packingPositions)}
                    </div>
                ))
            ) : (
                <p>No sent shipments.</p>
            )}
        </div>
    );
}
