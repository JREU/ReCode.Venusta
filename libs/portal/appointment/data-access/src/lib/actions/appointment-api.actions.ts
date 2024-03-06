import {createActionGroup, props} from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";
import { Appointment } from "@venusta/portal/appointment/models";

export const appointmentApiActions = createActionGroup({
  source: 'Appointment API',
  events: {
    appointmentLoadedSuccess: props<{ appointment: Appointment }>(),
    appointmentLoadedFailure: props<{ error: HttpErrorResponse }>(),
    appointmentsLoadedSuccess: props<{ appointments: Appointment[] }>(),
    appointmentsLoadedFailure: props<{ error: HttpErrorResponse }>(),
    appointmentDeletedSuccess: props<{ appointmentId: number }>(),
    appointmentDeletedFailure: props<{ error: HttpErrorResponse }>(),
    appointmentCreatedSuccess: props<{ appointment: Appointment }>(),
    appointmentCreatedFailure: props<{ error: HttpErrorResponse }>(),
    appointmentUpdatedSuccess: props<{ updatedAppointment: Appointment }>(),
    appointmentUpdatedFailure: props<{ error: HttpErrorResponse }>()
  }
});
