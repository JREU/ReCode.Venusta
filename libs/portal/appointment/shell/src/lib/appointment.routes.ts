import { Route } from "@angular/router";

export const appointmentRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@venusta/portal/appointment/appointments').then(m => m.AppointmentsComponent)
  }
];
