import { Route } from '@angular/router';
import { provideAppointment } from './appointment.provider';

export const appointmentRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@venusta/portal/appointment/appointments').then(
        m => m.AppointmentsComponent,
      ),
    providers: [provideAppointment()],
  },
];
