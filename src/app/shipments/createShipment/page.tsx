"use server"

import Form from "next/form";
import {insertShipment} from "@/api";
import {Button} from "@/components/ui/button";

export default async function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div>
                <Form action={insertShipment}>
                <input id="packingSlipId" name="packingSlipId" type="text" placeholder="Enter packing slip ID" required />
                <input id="manufacturingDate" name="manufacturingDate" type="date" placeholder="Enter manufacturing date" required />
                <input id="storageLocation" name="storageLocation" type="text" placeholder="Enter storage location" required />
                <input id="consumptionPoint" name="consumptionPoint" type="text" placeholder="Enter consumption point" />
                <input id="consignation" name="consignation" type="text" placeholder="Enter consignation" />
                <input id="usageCode" name="usageCode" type="text" placeholder="Enter usage code" />
                <input id="dutiableGoods" name="dutiableGoods" type="text" placeholder="Enter dutiable goods" />
                <input id="batchNumber" name="batchNumber" type="text" placeholder="Enter batch number" required />
                <input id="shippingDate" name="shippingDate" type="date" placeholder="Enter shipping date" required />
                <input id="changeCode" name="changeCode" type="text" placeholder="Enter change code" />
                <input id="partNumberSupplier" name="partNumberSupplier" type="text" placeholder="Enter part number (supplier)" required />
                <input id="quantity2" name="quantity2" type="number" placeholder="Enter quantity" required />
                <input id="unitOfMeasure" name="unitOfMeasure" type="text" placeholder="Enter unit of measure" />
                <input id="countryOfOrigin" name="countryOfOrigin" type="text" placeholder="Enter country of origin" />
                <input id="packingSlipText" name="packingSlipText" type="text" placeholder="Enter packing slip text" />
                <input id="status" name="status" type="text" placeholder="Enter status" />
                
                    <Button type="submit">Submit</Button>
                </Form>

                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}