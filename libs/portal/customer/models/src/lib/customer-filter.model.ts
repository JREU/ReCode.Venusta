import { Address } from './address.model';

export type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: Address;
  dateOfBirth: Date;
  createdAtUTC: Date;
  createdBy: string;
  updatedAtUTC: Date | null;
  updatedBy: string | null;
  archivedAtUTC: Date | null;
  archivedBy: string | null;
};
