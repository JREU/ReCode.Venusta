import { Customer } from "@venusta/portal/customer/models";
import { PortalState } from "@venusta/portal/shared/data-access";

export type State = PortalState & {
  customer: CustomerState;
}

export type CustomerState = {
  customers: Customer[] | null;
  customer: Customer | null;
}
