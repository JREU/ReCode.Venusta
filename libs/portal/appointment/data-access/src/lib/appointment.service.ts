import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filterNullAndUndefined } from '@recode/utilities';
import { Appointment } from '@venusta/portal/appointment/models';
import { map, Observable, of, throwError } from 'rxjs';

@Injectable()
export class AppointmentService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('./assets/data/appointments.json').pipe(
      filterNullAndUndefined(),
      map(appointments => appointments),
    );
  }

  get(appointmentId: number): Observable<Appointment> {
    return this.http.get<Appointment[]>('./assets/data/appointments.json').pipe(
      filterNullAndUndefined(),
      map(appointments => {
        const appointment = appointments.find(
          appointment => appointment.id === appointmentId,
        );

        if (!appointment) {
          throw throwError(
            () =>
              new Error(
                `Could not retrieve appointment. No appointment found with id: ${appointmentId}`,
              ),
          );
        }

        return appointment;
      }),
    );
  }

  put(appointment: Appointment): Observable<Appointment> {
    return of(appointment);
  }

  post(appointment: Omit<Appointment, 'id'>): Observable<Appointment> {
    console.log('posting appointment', appointment);

    return of({ ...appointment, id: 1 } as Appointment);
  }
}
