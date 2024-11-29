import Form from 'next/form'
import { createSupplier} from "@/api";

export function CreateSupplierForm() {
    return (
        <div>
            <Form action={createSupplier}>
                <input name="clientId" type="text" placeholder="Enter client ID"></input>
                <input name="number" type="text" placeholder="Enter supplier number"></input>
                <input name="name" type="text" placeholder="Enter supplier name"></input>
                <input name="streetHouseNumber" type="text" placeholder="Enter house number"></input>
                <input name="zipCode" type="text" placeholder="Enter ZIP code"></input>
                <input name="city" type="text" placeholder="Enter city"></input>
                <input name="land" type="text" placeholder="Enter country"></input>
                <input name="phone" type="text" placeholder="Enter phone number"></input>
                <input name="fax" type="text" placeholder="Enter fax number"></input>
                <input name="mail" type="text" placeholder="Enter email address"></input>
                <button type="submit">Create</button>
            </Form>
        </div>
    );
}