export interface User {
  id: 0;
  description: string;
  name: string;
  password: string;
  loginName: string;
  updatedBy: string;
  updatedAt: Date;
  createdBy: string;
  createdAt: Date;
  lastLogin: Date;
  status: 0;
  passwordChanged: 0;
  passwordChangeable: 0;
  passwordValidTo: Date;
  passwordResetToken: string;
  passwordResetTokenExpiredAt: Date;
  passwordSalt: string;
}

export interface Supplier {
  id: number;
  adminUserId: number;
  clientId: number;
  number: string;
  name: string;
  streetHouseNumber: string;
  zipCode: string;
  city: string;
  land: string;
  phone: string;
  fax: string;
  email: string;
  status: string;
  labWarningInHours: number;
  updatedAt: Date;
  updatedBy: string;
  createdAt: Date;
  createdBy: string;
  ebWarningInHours: number;
  dunsNumber: string;
  labInfoInHours: number;
  bruInfoInHours: number;
  labWarningToClient: number;
  besWarningInHours: number;
  bewWarningInHours: number;
  bruWarningInHours: number;
  mabWarningInHours: number;
  concurrentEdi: number;
  asnNotificationInHours: number;
  asnWarningInHours: number;
}
