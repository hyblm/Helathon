export interface Client {
  id: bigint;
  number: string;
  land: string;
  name: string;
  createdAt: Date;
  createdBy: Client;
  updatedAt: Date;
  updatedBy: Client;
  city: string;
  zipCode: string;
  status: string;
  streetHouseNumber: string;
  packageNumberPrefix: string;
  adminClientId: bigint;
  oftpTargetSystem: string;
}

export interface Supplier {
  "clientId": bigint;
  "number": "string",
  "name": "string",
  "streetHouseNumber": "string",
  "zipCode": "string",
  "city": "string",
  "land": "string",
  "phone": "string",
  "fax": "string",
  "email": "string"
}