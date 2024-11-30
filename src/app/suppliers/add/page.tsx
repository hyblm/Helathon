"use server"

import Form from "next/form";
import {createSupplier} from "@/api";
import {Button} from "@/components/ui/button";

export default async function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div>
                    <Form action={createSupplier}>
                        <input id="clientId" name="clientId" type="text" placeholder="Enter client ID"></input>
                        <input id="number" name="number" type="text" placeholder="Enter supplier number"></input>
                        <input id="name" name="name" type="text" placeholder="Enter supplier name"></input>
                        <input id="streetHouseNumber" name="streetHouseNumber" type="text"
                               placeholder="Enter house number"></input>
                        <input id="zipCode" name="zipCode" type="text" placeholder="Enter ZIP code"></input>
                        <input id="city" name="city" type="text" placeholder="Enter city"></input>
                        <input id="land" name="land" type="text" placeholder="Enter country"></input>
                        <input id="phone" name="phone" type="text" placeholder="Enter phone number"></input>
                        <input id="fax" name="fax" type="text" placeholder="Enter fax number"></input>
                        <input id="mail" name="mail" type="text" placeholder="Enter email address"></input>
                        <Button type="submit">Create</Button>
                    </Form>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}