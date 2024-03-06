import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appointmentFeature, appointmentPageActions, AppointmentState } from "@venusta/portal/appointment/data-access";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Appointment } from "@venusta/portal/appointment/models";
import { filterNullAndUndefined } from "@recode/utilities";

@Component({
  selector: 'venusta-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {
  private readonly store = inject(Store<AppointmentState>);

  protected appointments$!: Observable<Appointment[]>;

  ngOnInit(): void {
    this.store.dispatch(appointmentPageActions.loadAppointments());
    this.appointments$ = this.store.select(appointmentFeature.selectAppointments).pipe(filterNullAndUndefined());
  }
}
