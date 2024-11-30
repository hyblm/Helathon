export interface PartialUser {
    name: string,
    loginName: string,
    phone: string,
    fax: string,
    mobileNumber: string,
    email: string,
    clientNumber: string,
    password: string
}

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

export interface PartialSupplier {
    clientId: number,
    number: string,
    name: string,
    streetHouseNumber: string,
    zipCode: string,
    city: string,
    land: string,
    phone: string,
    fax: string,
    email: string
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

export interface UserData {
    id: number,
    phone: string,
    mobileNumber: string,
    fax: string,
    email: string,
    labWarning: string,
    notificationType: string,
    userId: 0,
    supplierId: 0,
    clientNumber: string,
    language: string,
    status: string,
    createdAt: Date,
    createdBy: string,
    updatedAt: Date,
    updatedBy: string,
    ebWarning: string,
    ldapUid: string,
    ebNotification: string,
    zaNotification: string,
    zaWarning: string,
    besNotification: string,
    besWarning: string,
    bewWarning: string,
    bruWarning: string,
    mabWarning: string,
    unassignedSupplierNumberWarning: string,
    inactiveUsersWarning: string,
    inactiveSupAdmWarning: string,
    inactiveCliAdmWarning: string,
    asnWarning: string
}

export interface Shipment{
id: number,
clientNumber:	string,
supplierNumber:	string,
customerNumber:	string,
status: number,
creationDate:	string,
plantDescription:	string,
shipmentNumber:	string,
packagingType:	string,
qtyInPackage:	string,
shipmentGrossWeight:	number,
shipmentNetWeight:	number,
supplierPlant:	string,
supplierPlantCountry:	string,
supplierPlantZipCode:	string,
estimatedArrivalDate:	string,
estimatedArrivalTime:	string,
inCoTerms:	string,
transportMode:	string,
transportKey:	string,
transportNumber:	string,
transportType:	string,
hazardousGoods:	string,
transportPartnerNo:	string,
carrier:	string,
updatedAt:	string,
updatedBy:	string,
createdAt: string,
createdBy:	string,
shipmentDate:	string,
shipmentTime:	string,
plantNumber:	string,
kindOfTransport:  string,
orderingKey:	string,
unitOfMeasure:	string,
serialLabelNoPrefix: number
}

export interface PackingPosition{
  id:number,
  additionalDataId:	number,
  shipmentId:	number,
  packingPosition:	string,
  customerPackUnit:string,
  supplierPackUnit: string,
  qtyPerPackUnit:	number,
  qtyOfPackUnits:	string,
  serialLabelNoFrom:	string,
  serialLabelNoTo:	string,
  lk: string,
  vk:	string,
  ek:	string,
  hazardousGoods:	string,
  unitOfMeasure:	string,
  packUnitsQty:	string,
  grossWeight:	number,
  netWeight:	number,
  status:	string,
  updatedAt:	string,
  updatedBy:	string,
  createdAt: Date,
  createdBy:	string
  }
