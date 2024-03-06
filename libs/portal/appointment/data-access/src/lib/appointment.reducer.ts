import { createReducer, on } from "@ngrx/store";
import { AppointmentState } from "./appointment.state";
import { appointmentApiActions } from "@venusta/portal/appointment/data-access";

const initialState: AppointmentState = {
  appointments: null,
  appointment: null
}

export const appointmentReducer = createReducer<AppointmentState>(
  initialState,
  on(appointmentApiActions.appointmentLoadedSuccess, (state, { appointment }) => ({
    ...state,
    appointment: appointment
  })),
  on(appointmentApiActions.appointmentLoadedFailure, (state) => ({
    ...state,
    appointment: null
  })),
  on(appointmentApiActions.appointmentsLoadedSuccess, (state, { appointments }) => ({
    ...state,
    appointment: null,
    appointments: appointments
  })),
  on(appointmentApiActions.appointmentsLoadedFailure, (state) => ({
    ...state,
    appointments: null,
    appointment: null
  })),
  on(appointmentApiActions.appointmentDeletedSuccess, (state, { appointmentId }) => ({
    ...state,
    appointments: state.appointments?.filter(appointment => appointment.id !== appointmentId) ?? null
  })),
  on(appointmentApiActions.appointmentUpdatedSuccess, (state, { updatedAppointment }) => ({
    ...state,
    appointment: updatedAppointment
  }))
);
