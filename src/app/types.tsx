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