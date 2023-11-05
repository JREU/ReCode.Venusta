import { Address } from "./address.model";

export type Customer = {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    address: Address;
    createdAtUTC: Date;
    createdBy: string;
    updatedAtUTC: Date;
    updatedBy: string;
    archivedAtUTC: Date;
    archivedBy: string;
}
