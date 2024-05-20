import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Appointment } from "@venusta/portal/appointment/models";

export const appointmentPageActions = createActionGroup({
  source: 'Appointment Page',
  events: {
    loadAppointments: emptyProps,
    loadAppointment: props<{ appointmentId: number }>(),
    deleteAppointment: props<{ appointmentId: number }>(),
    createAppointment: props<{ appointment: Omit<Appointment, "id"> }>(),
    updateAppointment: props<{ appointment: Appointment }>()
  }
});
