"use server"

import * as Types from './app/types'
import {redirect} from "next/navigation";

const base_url = "https://www.hella.com/webEdiPersistence/";
const headers = {
  securitytoken: process.env.SECURITY_TOKEN,
};
const formDataToObject = (formData: FormData) => {
  const obj: { [key: string]: string } = {};
  formData.forEach((value, key) => {
    obj[key] = value as string;
  });
  return obj;
};

async function call(endpoint: string) {
  let url = `${base_url}${endpoint}`;
  let res = await fetch(url, {
    headers: headers,
  });

  if (res.ok) {
    let data = await res.json();
    return data;
  }
}

async function post(endpoint: string, body: string) {
  let url = `${base_url}${endpoint}`;
  let res = await fetch(url, {
    body: body,
    headers: headers,
    method: 'POST',
  });



  if (res.ok) {
    let data = await res.json();
    return data;

  }
}

async function callDelete(endpoint: string) {
  let url = `${base_url}${endpoint}`;
  let res = await fetch(url, {
    headers: headers,
    method: 'DELETE'
  });

  if (res.ok) {
    let data = await res.json();
    return data;
  }
}

export async function getAllUsers() {
  return call("users/getAllUsers");
}

export async function getUserById(id: string) {
  return call(`users/getUserById?id=${id}`);
}

export async function getAllClientNumbers() {
  return call("clients/getAllClientNumbers");
}

export async function authenticateUser(loginName: string, password: string){
  return call(`users/authentiateUser?loginName=${loginName}&password=${password}`)
}

export async function getClientSuppliers(id: number) {
  return call(`suppliers/getSuppliersOfClientWithId?clientId=${id}`);
}

export async function createSupplier(formData: FormData) {
  let body: Types.PartialSupplier = formDataToObject(formData);

  await post("suppliers/createSupplier", JSON.stringify(body))

  redirect("..")
}

export async function deleteSupplier(id: number) {
  return callDelete(`suppliers/deleteSupplier?id=${id}`);
}

export async function getClientByNumber(number: string) {
  return call(`clients/getClientByNumber?number=${number}`);
}

export async function getAllClients() {
  return call("clients/getAllClients");
}

export async function getAllExistingUserRoles() {
  return call("users/getAllExistingUserRoles");
}

export async function createUser(formData: FormData) {
  let body: Types.PartialUser = formDataToObject(formData);
  console.log(body);
  await insertUser(JSON.stringify(body));
}

export async function insertUser(body: string) {
  return post("users/insertUser", body);
}

