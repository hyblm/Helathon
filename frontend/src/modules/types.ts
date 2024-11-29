export interface User {
  id: bigint;
  description: string;
  name: string;
  password: string;
  loginName: string;
  updatedBy: string;
  updatedAt: Date;
  createdBy: string;
  createdAt: Date;
  lastLogin: Date;
  status: number;
  passwordChanged: Boolean;
  passwordChangeable: Boolean;
  passwordValidTo: Date;
  passwordResetToken: string;
  passwordResetTokenExpiredAt: Date;
  passwordSalt: string;
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