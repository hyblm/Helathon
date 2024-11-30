"use server";

import Form from "next/form";
import { insertShipment } from "@/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Home() {
  return (
    <div className="container m-auto">
      <Form className="grid grid-cols-2 gap-2" action={insertShipment}>
        <Input
          id="packingSlipId"
          name="packingSlipId"
          type="text"
          placeholder="Enter packing slip ID"
          required
        />
        <Input
          id="manufacturingDate"
          name="manufacturingDate"
          type="date"
          placeholder="Enter manufacturing date"
          required
        />
        <Input
          id="storageLocation"
          name="storageLocation"
          type="text"
          placeholder="Enter storage location"
          required
        />
        <Input
          id="consumptionPoint"
          name="consumptionPoint"
          type="text"
          placeholder="Enter consumption point"
        />
        <Input
          id="consignation"
          name="consignation"
          type="text"
          placeholder="Enter consignation"
        />
        <Input
          id="usageCode"
          name="usageCode"
          type="text"
          placeholder="Enter usage code"
        />
        <Input
          id="dutiableGoods"
          name="dutiableGoods"
          type="text"
          placeholder="Enter dutiable goods"
        />
        <Input
          id="batchNumber"
          name="batchNumber"
          type="text"
          placeholder="Enter batch number"
          required
        />
        <Input
          id="shippingDate"
          name="shippingDate"
          type="date"
          placeholder="Enter shipping date"
          required
        />
        <Input
          id="changeCode"
          name="changeCode"
          type="text"
          placeholder="Enter change code"
        />
        <Input
          id="partNumberSupplier"
          name="partNumberSupplier"
          type="text"
          placeholder="Enter part number (supplier)"
          required
        />
        <Input
          id="quantity2"
          name="quantity2"
          type="number"
          placeholder="Enter quantity"
          required
        />
        <Input
          id="unitOfMeasure"
          name="unitOfMeasure"
          type="text"
          placeholder="Enter unit of measure"
        />
        <Input
          id="countryOfOrigin"
          name="countryOfOrigin"
          type="text"
          placeholder="Enter country of origin"
        />
        <Input
          id="packingSlipText"
          name="packingSlipText"
          type="text"
          placeholder="Enter packing slip text"
        />
        <Input
          id="status"
          name="status"
          type="text"
          placeholder="Enter status"
        />

        <Button className="col-span-2" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

