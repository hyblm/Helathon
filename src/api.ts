const base_url = "https://www.hella.com/webEdiPersistence/";
async function call(endpoint: string) {
  let url = `${base_url}${endpoint}`;
  let response = await fetch(url, {
    headers: {
      securitytoken: process.env.SECURITY_TOKEN,
    },
  });

  if (response.ok) {
    let test = await response.text();
    console.log(test);
    console.log("test");
  }
}

export async function getUserById(id: string) {
  return call(`users/getUserById?id=${id}`);
}

export async function getAllClientNumbers() {
  return call("clients/getAllClientNumbers");
}
