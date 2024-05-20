import { PortalState } from "@venusta/portal/shared/data-access";
import { Appointment } from "@venusta/portal/appointment/models";

export type State = PortalState & {
  appointment: AppointmentState;
}

export type AppointmentState = {
  appointments: Appointment[] | null;
  appointment: Appointment | null;
}
