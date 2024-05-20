import { createReducer, on } from '@ngrx/store';
import { appointmentApiActions } from './actions';
import { AppointmentState } from './appointment.state';

const initialState: AppointmentState = {
  appointments: null,
  appointment: null,
};

export const appointmentReducer = createReducer<AppointmentState>(
  initialState,
  on(
    appointmentApiActions.appointmentLoadedSuccess,
    (state, { appointment }): AppointmentState => ({
      ...state,
      appointment: appointment,
    }),
  ),
  on(
    appointmentApiActions.appointmentLoadedFailure,
    (state): AppointmentState => ({
      ...state,
      appointment: null,
    }),
  ),
  on(
    appointmentApiActions.appointmentsLoadedSuccess,
    (state, { appointments }): AppointmentState => ({
      ...state,
      appointment: null,
      appointments: appointments,
    }),
  ),
  on(
    appointmentApiActions.appointmentsLoadedFailure,
    (state): AppointmentState => ({
      ...state,
      appointments: null,
      appointment: null,
    }),
  ),
  on(
    appointmentApiActions.appointmentDeletedSuccess,
    (state, { appointmentId }) => ({
      ...state,
      appointments:
        state.appointments?.filter(
          appointment => appointment.id !== appointmentId,
        ) ?? null,
    }),
  ),
  on(
    appointmentApiActions.appointmentUpdatedSuccess,
    (state, { updatedAppointment }): AppointmentState => ({
      ...state,
      appointment: updatedAppointment,
    }),
  ),
);
