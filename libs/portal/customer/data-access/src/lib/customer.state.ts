import { Customer, CustomerFilter } from '@venusta/portal/customer/models';
import { PortalState } from '@venusta/portal/shared/data-access';

export type State = PortalState & {
  customer: CustomerState;
};

export type CustomerState = {
  customers: Customer[] | null;
  customer: Customer | null;
  searchQuery: string | null;
  searchResult: Customer[] | null;
  filter: CustomerFilter | null;
};
