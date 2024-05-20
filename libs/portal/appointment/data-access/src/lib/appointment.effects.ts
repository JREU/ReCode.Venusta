import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { RouterUtil } from "@venusta/portal/shared/utils";
import { AppointmentService } from "./appointment.service";
import { appointmentApiActions, appointmentPageActions } from "./actions";

@Injectable()
export class AppointmentEffects {
  private readonly actions$ = inject(Actions)
  private readonly router = inject(Router);
  private readonly appointmentService = inject(AppointmentService);

  loadAppointments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appointmentPageActions.loadAppointments),
      mergeMap(() => this.appointmentService.getAll().pipe(
        map((appointments) => appointmentApiActions.appointmentsLoadedSuccess({ appointments })),
        catchError(error => of(appointmentApiActions.appointmentsLoadedFailure({error})))
      ))
    )
  });

  loadAppointment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appointmentPageActions.loadAppointment),
      mergeMap((action) => this.appointmentService.get(action.appointmentId).pipe(
        map((appointment) => appointmentApiActions.appointmentLoadedSuccess({ appointment })),
        catchError(error => of(appointmentApiActions.appointmentLoadedFailure({error})))
      ))
    )
  });

  updateAppointment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appointmentPageActions.updateAppointment),
      mergeMap((action) => this.appointmentService.put(
        action.appointment
      ).pipe(
        map((updatedAppointment) =>
          appointmentApiActions.appointmentUpdatedSuccess({ updatedAppointment })
        ),
        catchError(error => of(appointmentApiActions.appointmentUpdatedFailure({error})))
      ))
    )
  });

  createAppointment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appointmentPageActions.createAppointment),
      mergeMap((action) => this.appointmentService.post(
        action.appointment
      ).pipe(
        map((createdAppointment) => appointmentApiActions.appointmentCreatedSuccess({ appointment: createdAppointment })),
        catchError(error => of(appointmentApiActions.appointmentCreatedFailure({error})))
      ))
    )
  });

  appointmentCreated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appointmentApiActions.appointmentCreatedSuccess),
      exhaustMap((action) => this.router.navigate([RouterUtil.Configuration.Appointments, action.appointment.id]))
    )
  },{ dispatch: false });
}
