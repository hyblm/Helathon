import Form from 'next/form'

export function CreateSupplierForm() {
    return (
        <div>
            <Form action="">
                <input name="clientId" type="number"></input>
                <input name="number" type="text"></input>
                <input name="name" type="text"></input>
                <input name="streetHouseNumber" type="text"></input>
                <input name="zipCode" type="text"></input>
                <input name="city" type="text"></input>
                <input name="land" type="text"></input>
                <input name="phone" type="text"></input>
                <input name="fax" type="text"></input>
                <input name="mail" type="text"></input>
            </Form>
        </div>
    );
}