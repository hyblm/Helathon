"use server"

import * as Types from './app/types'

const base_url = "https://www.hella.com/webEdiPersistence/";
async function call(endpoint: string) {
  let url = `${base_url}${endpoint}`;
  let response = await fetch(url, {
    headers: {
      securitytoken: process.env.SECURITY_TOKEN,
    },
  });

  if (response.ok) {
    return await response.text();
  }
}

export async function getUserById(id: string) {
  return call(`users/getUserById?id=${id}`);
}

export async function getAllClientNumbers() {
  return call("clients/getAllClientNumbers");
}

export async function createSupplier(formData: FormData) {
  const newSupplier: Types.Supplier = formData;

  return call("suppliers/createSupplier", newSupplier)
}
