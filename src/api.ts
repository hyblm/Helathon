"use server";

const base_url = "https://www.hella.com/webEdiPersistence/";
const headers = {
  securitytoken: process.env.SECURITY_TOKEN,
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

export async function getClientByNumber(number: string) {
  return call(`clients/getClientByNumber?number=${number}`);
}

export async function getAllClients() {
  return call("clients/getAllClients");
}

export async function getAllExistingUserRoles() {
  return call("users/getAllExistingUserRoles");
}

interface User {
  name: "string";
  clientNumber: "string";
  password: "string";
}

export async function createUser(formData: FormData) {
  let body: User = formData;
  console.log(body);
  await insertUser(JSON.stringify(body));
}

export async function insertUser(body: string) {
  return call("users/insertUser", body);
}
