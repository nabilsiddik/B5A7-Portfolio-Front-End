export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
  BLOCKED = "BLOCKED",
  RESTRICTRED = "RESTRICTED",
}

export interface IUser {
  id?: number;
  fullName: string;
  email: string;
  password: string;
  role?: UserRole;
  phone?: string;
  picture?: string;
  status?: UserStatus;
  isVerified?: boolean;
}
